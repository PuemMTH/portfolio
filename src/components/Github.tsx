import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/puemmth/repos');
        const data = await response.json();
    
        const uniqueLanguages = new Set(data.map((project: Project) => project.language).filter((language: string | null) => language !== null));
        setLanguages(Array.from(uniqueLanguages) as string[]);
        setProjects(data);
        setAllProjects(data);
      } catch (error) {
        Notiflix.Notify.failure('Failed to fetch projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const sortProjectsByLanguage = (language: string) => {
    if (selectedLanguage === language) {
      setSelectedLanguage(null);
      setProjects(allProjects);
    } else {
      setSelectedLanguage(language);
      const sortedProjects = allProjects.filter(project => project.language === language);
      setProjects(sortedProjects);
    }
  };
  
  const SkeletonLoader = () => (
    <div className="animate-loading bg-gray-300 h-4 w-full mb-4 rounded"></div>
  );

  return (
    <div className='container mx-auto py-12'>
      <h1 className='text-4xl font-bold mb-8'>My GitHub</h1>
      <div className='mb-8'>
        {languages.map((language, index) => (
          <button
            key={index}
            className={`cursor-pointer font-semibold py-2 px-4 rounded mr-2 mb-2 ${
              selectedLanguage === language
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border border-blue-500"
            }`}
            onClick={() => sortProjectsByLanguage(language)}
            >
            {language}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {loading ? (
          Array.from({ length: 6 }, (_, i) => (
            <div key={i} className='bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow'>
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
              <SkeletonLoader />
            </div>
          ))
        ) : projects.length > 0 ? (
          projects.map((project, index) => (
            <div
              key={index}
              className='bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow'
            >
              <h2 className='text-2xl font-semibold mb-2'>{project.name}</h2>
              <p className='mb-4 line-clamp-1'>{project.description}</p>
              <p className='mb-4 font-semibold'>
                {project.language || "Unknown"}
              </p>
              <a
                href={project.html_url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 hover:text-blue-700 font-medium'
              >
                View project on GitHub
              </a>
            </div>
          ))
        ) : (
          <div className='col-span-full'>
            <p className='text-xl text-center'>
              ไม่พบ Repo {selectedLanguage || ""}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
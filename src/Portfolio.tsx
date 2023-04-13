import React, { useState, useEffect } from 'react';

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string | null;
}

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('https://api.github.com/users/puemmth/repos');
      const data = await response.json();

      const uniqueLanguages = new Set(data.map((project: Project) => project.language).filter((language: string | null) => language !== null));
      setLanguages(Array.from(uniqueLanguages) as string[]);
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const sortProjectsByLanguage = (language: string) => {
    setSelectedLanguage(language);
    const sortedProjects = projects.filter(project => project.language === language);
    setProjects(sortedProjects);
  };

  const resetProjects = async () => {
    setSelectedLanguage(null);
    const response = await fetch('https://api.github.com/users/puemmth/repos');
    const data = await response.json();
    setProjects(data);
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="mb-8">
        {languages.map((language, index) => (
          <button
            key={index}
            className={`font-semibold py-2 px-4 rounded mr-2 mb-2 ${
              selectedLanguage === language ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
            }`}
            onClick={() => sortProjectsByLanguage(language)}
          >
            {language}
          </button>
        ))}
        <button
          className={`font-semibold py-2 px-4 rounded mb-2 ${
            selectedLanguage === null ? 'bg-red-500 text-white' : 'bg-white text-red-500 border border-red-500'
          }`}
          onClick={resetProjects}
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
            <p className="mb-4 line-clamp-1">{project.description}</p>
            <p className="mb-4 font-semibold">{project.language || 'Unknown'}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-medium"
            >
              View project on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

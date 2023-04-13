import React, { useState, useEffect } from 'react';

interface Language {
  name: string;
  count: number;
}

const Skills: React.FC = () => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      const response = await fetch('https://api.github.com/users/puemmth/repos');
      const data = await response.json();

      const languageCount: Record<string, number> = {};

      data.forEach((repo: any) => {
        if (repo.language) {
          languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
        }
      });

      const languageArray: Language[] = Object.entries(languageCount).map(([name, count]) => ({
        name,
        count,
      }));

      setLanguages(languageArray);
    };

    fetchLanguages();
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            {language.name}: {language.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;

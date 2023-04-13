import React from "react";

interface ProfileProps {
  name: string;
  skills: string[];
  tool: string[];
  imageUrl: string;
  bio: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  skills,
  tool,
  imageUrl,
  bio,
}) => {
  return (
    <div className='bg-white shadow-md rounded p-6 grid grid-cols-1 md:grid-cols-2 gap-4'>
      <div className='md:pr-4'>
        <img
          className='rounded-full w-40 h-40 mb-4 mx-auto'
          src={imageUrl}
          alt='Profile picture'
        />
        <h2 className='text-2xl font-semibold text-center mb-2'>{name}</h2>
        <p className='text-gray-500 text-left mb-4'>{bio}</p>
        
      </div>
      <div className='md:pl-4'>
        <div className='mb-4'>
          <h3 className='text-lg font-medium mb-2'>Skills</h3>
          <pre className='bg-gray-200 p-2 rounded'>
            <code className='text-sm'>
              {skills.map((skill, index) => (
                <div key={index}>$ {skill}</div>
              ))}
            </code>
          </pre>
        </div>
        <div>
          <h3 className='text-lg font-medium mb-2'>Tool</h3>
          <pre className='bg-gray-200 p-2 rounded'>
            <code className='text-sm'>
              {tool.map((language, index) => (
                <div key={index}>$ {language}</div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Profile;

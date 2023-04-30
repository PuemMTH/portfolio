import React from 'react';
import Profile from './Profile';
import ProfileImg from "../assets/profile.jpg";

const MyProfile: React.FC = () => {
  const skills = ['JS/TS', 'Node.js', 'MySQL / MongoDB',
  'Next.js / React', 'Express.js', 'GitHub', 'Laravel'];
  const Tool = [
    'Visual Studio Code',
    'Visual Studio',
    'MatLab',
  ]

  return (
    <div className='container mx-auto py-12'>
      <h1 className='text-4xl font-bold mb-8' style={
        { color: '#F9FAFB' }
      }>My Profile</h1>
      <Profile
        name='Tanapat Eiam-arj'
        skills={skills}
        tool={Tool}
        imageUrl={ProfileImg}
        bio='I am a software developer with experience in web development and a passion for creating great user experiences.'
      />
    </div>
  );
};

export default MyProfile;

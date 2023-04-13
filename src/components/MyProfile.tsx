import React from 'react';
import Profile from './Profile';

const MyProfile: React.FC = () => {
  const skills = ['JavaScript', 'TypeScript', 'Node.js', 'React', 
  'Next.js', 'Express.js', 'MongoDB', 'MySQL', 'GitHub', 'PHP', 
  'Python', 'Java', 'C#', 'C', 'Laravel', 'Arduino', 'Raspberry Pi', 'ESP32', 'ESP8266', 'NodeMCU'];
  const Tool = [
    'Visual Studio Code',
    'Visual Studio',
    'Android Studio',
    'Arduino IDE',
    'XAMPP',
    'Postman',
    'Figma',
    'MatLab',
  ]

  return (
    <div className='container mx-auto py-12'>
      <h1 className='text-4xl font-bold mb-8'>My Profile</h1>
      <Profile
        name='Tanapat Eiam-arj'
        skills={skills}
        tool={Tool}
        // imageUrl='https://via.placeholder.com/100x100'
        imageUrl='https://scontent.fkdt1-1.fna.fbcdn.net/v/t39.30808-6/318530538_2403683963124146_8694170325788139441_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFxQLPiQP755roT3xX2M0LVNnYhWN35bUA2diFY3fltQCZov0UJTOMfWjw14ml3BCX23MW74JZ8FfasqXc7jnyv&_nc_ohc=iEIMvFGi-4oAX8HUIOo&_nc_ht=scontent.fkdt1-1.fna&oh=00_AfC21SF04bhS-WHNcLYIcH_y2n1gi94tb2GFCPZzh1wT-w&oe=643DA27C'
        bio='I am a software developer with experience in web development and a passion for creating great user experiences.'
      />
    </div>
  );
};

export default MyProfile;

import Certificate from "./Certificate";

const Profile: React.FC = () => {
  const certificates = [
    {
      title: "Image Processing Onramp",
      issuer: "MathWorks",
      issueDate: "12 February 2023",
      credentialId: "33c64073-f8a4-4360-bd8f-f7405f6c1aad",
      credentialUrl:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=33c64073-f8a4-4360-bd8f-f7405f6c1aad&",
    },
    {
      title: "Image Processing with MATLAB",
      issuer: "MathWorks",
      issueDate: "7 March 2023",
      credentialId: "14de6e9b-e8c4-4844-9808-5459a73337f0",
      credentialUrl:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=14de6e9b-e8c4-4844-9808-5459a73337f0&",
    },
    {
      title: "MATLAB Fundamentals",
      issuer: "MathWorks",
      issueDate: "21 December 2021",
      credentialId: "8fe9be4c-eeab-452b-bb82-3a7485271260",
      credentialUrl:
        "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=8fe9be4c-eeab-452b-bb82-3a7485271260&",
    },
  ];

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold mb-8 ' style={{ color: '#F9FAFB' }}>My Certificates</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {certificates.map((certificate, index) => (
          <div key={index} className="bg-white shadow-md rounded hover:shadow-lg transition-shadow">
            <Certificate {...certificate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

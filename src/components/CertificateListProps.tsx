import Certificate from "./Certificate";

const Profile: React.FC = () => {
  const certificates = [
    {
      title: "React Developer",
      issuer: "FreeCodeCamp",
      issueDate: "2022-03-01T00:00:00Z",
      credentialId: "FCC-REACT-DEV-2022",
      credentialUrl:
        "https://www.freecodecamp.org/certification/puemmth/react-developer",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      issueDate: "2021-10-01T00:00:00Z",
      credentialId: "FCC-JS-ALGO-2021",
      credentialUrl:
        "https://www.freecodecamp.org/certification/puemmth/javascript-algorithms-and-data-structures",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      issueDate: "2021-10-01T00:00:00Z",
      credentialId: "FCC-JS-ALGO-2021",
      credentialUrl:
        "https://www.freecodecamp.org/certification/puemmth/javascript-algorithms-and-data-structures",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      issueDate: "2021-10-01T00:00:00Z",
      credentialId: "FCC-JS-ALGO-2021",
      credentialUrl:
        "https://www.freecodecamp.org/certification/puemmth/javascript-algorithms-and-data-structures",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      issueDate: "2021-10-01T00:00:00Z",
      credentialId: "FCC-JS-ALGO-2021",
      credentialUrl:
        "https://www.freecodecamp.org/certification/puemmth/javascript-algorithms-and-data-structures",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      issueDate: "2021-10-01T00:00:00Z",
      credentialId: "FCC-JS-ALGO-2021",
      credentialUrl:
        "https://www.freecodecamp.org/certification/puemmth/javascript-algorithms-and-data-structures",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      issueDate: "2021-10-01T00:00:00Z",
      credentialId: "FCC-JS-ALGO-2021",
      credentialUrl:
        "https://www.freecodecamp.org/certification/puemmth/javascript-algorithms-and-data-structures",
    },
    // add more certificates here
  ];

  return (
    <div className='container mx-auto'>
      <h1 className='text-4xl font-bold mb-8'>My Certificates</h1>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {certificates.map((certificate, index) => (
          <div key={index}>
            <Certificate {...certificate} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;

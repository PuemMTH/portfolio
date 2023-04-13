import React from 'react';

interface CertificateProps {
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
}

const Certificate: React.FC<CertificateProps> = ({
  title,
  issuer,
  issueDate,
  credentialId,
  credentialUrl,
}) => {
  return (
    <div className='p-4 border border-gray-300 rounded-md shadow-md'>
      <h2 className='text-xl font-semibold mb-2'>{title}</h2>
      <p className='text-gray-500 text-sm mb-2'>{issuer}</p>
      <p className='text-gray-500 text-sm mb-2'>
        Issued on: {new Date(issueDate).toLocaleDateString()}
      </p>
      <div className='flex flex-col sm:flex-row sm:items-center'>
        <p className='text-sm text-gray-500 sm:mr-2'>Credential ID:</p>
        <a
          href={credentialUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 hover:text-blue-700 text-sm font-medium'
        >
          {credentialId}
        </a>
      </div>
    </div>
  );
};

export default Certificate;

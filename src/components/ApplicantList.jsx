import React from 'react';

function ApplicantList({ applicants, handleApplicantClick }) {
  return (
    <div className="applicants-container">
      <div className="applicants-list">
        {applicants.map(applicant => (
          <div 
            key={applicant.id} 
            className={`applicant-item ${applicant.highlighted ? 'highlighted' : ''}`}
            onClick={() => handleApplicantClick(applicant)}
          >
            {applicant.name}
          </div>
        ))}
      </div>
      <div className="scroll-indicator"></div>
    </div>
  );
}

export default ApplicantList;
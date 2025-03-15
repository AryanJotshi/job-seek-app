import React from 'react';

function ApplicantList({ applicants, handleApplicantClick }) {
  return (
    <div className="applicants-container">
      <div className="filter-ai">
        <span>Filter with AI</span>
        <svg className="filter-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18" />
          <path d="M8 12h8" />
          <path d="M10 18h4" />
        </svg>
      </div>
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
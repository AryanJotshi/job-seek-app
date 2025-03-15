import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ApplicantList from './components/ApplicantList';
import DetailForm from './components/DetailForm';

function App() {
  // Sample data
  const [currentPostings, setCurrentPostings] = useState([
    { id: 1, title: 'Full Stack Developer', active: true },
    { id: 2, title: 'Frontend Engineer', active: true },
    { id: 3, title: 'Data Analysis for ML', active: true },
    { id: 4, title: 'Backend Engineer', active: false },
    { id: 5, title: 'Full Stack Developer', active: false },
    { id: 6, title: 'Python Expertise', active: false },
  ]);

  const [applicants, setApplicants] = useState([
    { id: 1, name: 'Applicant 1' },
    { id: 2, name: 'Applicant 2' },
    { id: 3, name: 'Applicant 3' },
    { id: 4, name: 'Applicant 4' },
    { id: 5, name: 'Applicant 5', highlighted: true },
    { id: 6, name: 'Applicant 6' },
    { id: 7, name: 'Applicant 7' },
    { id: 8, name: 'Applicant 8' },
  ]);

  const [selectedApplicant, setSelectedApplicant] = useState({
    name: 'Name',
    description: 'Supporting line text lorem ipsum dolor sit amet, consectetur...'
  });

  const [showDetailForm, setShowDetailForm] = useState(false);

  const handleApplicantClick = (applicant) => {
    setSelectedApplicant({
      name: applicant.name,
      description: 'Supporting line text lorem ipsum dolor sit amet, consectetur...'
    });
    
    // Update the highlighted state
    const updatedApplicants = applicants.map(app => ({
      ...app,
      highlighted: app.id === applicant.id
    }));
    
    setApplicants(updatedApplicants);
  };

  const handleCreatePosting = () => {
    setShowDetailForm(true);
  };

  return (
    <div className="app">
      <Header />
      
      <div className="main-content">
        <Sidebar currentPostings={currentPostings} />
        
        <main className="main-panel">
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-bar">
              <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <span className="search-text">Create New Posting</span>
              <button className="add-button" onClick={handleCreatePosting}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Applicants and Detail Panel */}
          <div className="content-area">
            <ApplicantList applicants={applicants} handleApplicantClick={handleApplicantClick} />
            
            {showDetailForm ? (
              <DetailForm />
            ) : (
              <div className="applicant-detail">
                <h3>{selectedApplicant.name}</h3>
                <p>{selectedApplicant.description}</p>
                <button className="view-profile-btn">View Profile</button>
              </div>
            )}
          </div>
        </main>
      </div>
      
      {/* Chat Button */}
      <div className="chat-button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
      </div>
    </div>
  );
}

export default App;
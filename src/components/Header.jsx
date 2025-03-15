import React, { useState } from 'react';

function Header() {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">Logo</div>
      </div>
      <div className="profile-container">
        <div className="profile-icon" onClick={() => setShowProfileDropdown(!showProfileDropdown)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="5" />
            <path d="M20 21a8 8 0 10-16 0" />
          </svg>
        </div>
        {showProfileDropdown && (
          <div className="profile-dropdown">
            <div className="dropdown-item">View Profile</div>
            <div className="dropdown-item">My Postings</div>
            <div className="dropdown-item">My Organization</div>
            <div className="dropdown-item">Sign Out</div>
            <div className="theme-toggle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
import React from 'react';

function Sidebar({ currentPostings }) {
  return (
    <aside className="sidebar">
      <h2>Current Postings</h2>
      <ul className="postings-list">
        {currentPostings.map(posting => (
          <li key={posting.id} className={`posting-item ${posting.active ? 'active' : 'inactive'}`}>
            <span>{posting.title}</span>
            <button className="edit-button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
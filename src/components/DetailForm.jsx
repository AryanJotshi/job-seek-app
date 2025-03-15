import React from 'react';

function DetailForm() {
  return (
    <div className="detail-form">
      <div className="form-group">
        <div className="form-label">Label</div>
        <div className="form-input">Input</div>
        <button className="clear-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </button>
      </div>
      <div className="form-hint">Supporting text</div>
      
      <div className="form-group">
        <div className="form-label">Label</div>
        <div className="form-input">Input</div>
        <button className="clear-button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </button>
      </div>
      <div className="form-hint">Supporting text</div>
    </div>
  );
}

export default DetailForm;
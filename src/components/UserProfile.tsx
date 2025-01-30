import React from 'react';
import './UserProfile.css';

export function UserProfile() {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-cover"></div>
        <div className="profile-avatar-wrapper">
          <div className="profile-avatar">JD</div>
        </div>
      </div>
      
      <div className="profile-info">
        <h3 className="profile-name">John Doe</h3>
        <p className="profile-title">Senior Developer</p>
        
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">45</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">12k</span>
            <span className="stat-label">Points</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">87%</span>
            <span className="stat-label">Success</span>
          </div>
        </div>

        <div className="profile-completion">
          <div className="completion-header">
            <span>Profile Completion</span>
            <span>85%</span>
          </div>
          <div className="completion-bar">
            <div className="completion-progress" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { DashboardShell } from './components/DashboardShell';
import { UserProfile } from './components/UserProfile';
import { SkillProgress } from './components/SkillProgress';
import './App.css';

function App() {
  return (
    <DashboardShell>
      <div className="dashboard-content">
        <h2 className="dashboard-title">Dashboard</h2>
        <div className="dashboard-grid">
          <UserProfile />
          <SkillProgress />
        </div>
      </div>
    </DashboardShell>
  );
}

export default App;
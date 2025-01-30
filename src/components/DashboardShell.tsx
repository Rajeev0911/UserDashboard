import React, { useState, ReactNode } from 'react';
import './DashboardShell.css';

interface DashboardShellProps {
  children: ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const menuItems = [
    { name: "Dashboard", icon: "", href: "#" },
    { name: "Skills", icon: "", href: "#" },
    { name: "Projects", icon: "", href: "#" },
    { name: "Analytics", icon: "", href: "#" },
    { name: "Settings", icon: "", href: "#" },
  ];

  return (
    <div className="shell">
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="app-title">Dashboard</h1>
        </div>
        
        <div className="menu">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="menu-item">
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-text">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>

      <main className="main">
        <header className="top-bar">
          <button 
            className="menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <span className="search-icon"></span>
          </div>
          <div className="user-menu">
            <div className="user-avatar">JD</div>
          </div>
        </header>
        <div className="content">
          {children}
        </div>
      </main>
    </div>
  );
}
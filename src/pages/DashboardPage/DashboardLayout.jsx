// src/pages/Dashboard/DashboardLayout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '70vh' }}>
      <nav style={{
        width: '200px',
        backgroundColor: '#f8f9fa',
        padding: '20px',
        margin: '200px',
        borderRight: '1px solid #e0e0e0',
        flexShrink: 0
      }}>
        <h3 style={{ marginTop: 0, color: '#343a40' }}>Dashboard Nav</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none', color: '#007bff' }}>Dashboard Home</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            {/* Link to the admin-only members page */}
            <Link to="/dashboard/admin-members" style={{ textDecoration: 'none', color: '#007bff' }}>Manage Members</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/dashboard/electives" style={{ textDecoration: 'none', color: '#007bff' }}>Electives</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/dashboard/conference" style={{ textDecoration: 'none', color: '#007bff' }}>Conference</Link>
          </li>
        </ul>
      </nav>

      <main style={{ flexGrow: 1, padding: '20px', backgroundColor: '#fff' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
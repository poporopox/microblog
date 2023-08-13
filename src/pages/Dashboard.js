import React from 'react';
import { useAuth } from '../components/useAuth';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Welcome, {user ? user.name : 'Guest'}</h2>
      {user ? <button onClick={logout}>Logout</button> : null}
    </div>
  );
};

export default Dashboard;

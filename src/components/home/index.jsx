import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { Navigate } from 'react-router-dom';

const Home = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="text-2xl font-bold pt-14">
      Hello {currentUser.displayName || currentUser.email}, you are now logged in.
    </div>
  );
};

export default Home;

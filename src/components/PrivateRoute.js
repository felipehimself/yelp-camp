import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const PrivateRoute = () => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = isAuthenticated && user;
  return isUser ? <Outlet /> : <SignIn />;
};

export default PrivateRoute;

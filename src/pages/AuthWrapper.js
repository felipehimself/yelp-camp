import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Oval } from 'react-loading-icons';
const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className='is-loading'>
        <Oval stroke="#06bcee" height={'100px'} />
      </div>
    );
  }

  if (error) {
    <h1 className='is-loading'>{error.message}</h1>;
  }

  return <>{children}</>;
};

export default AuthWrapper;

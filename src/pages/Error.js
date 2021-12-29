import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <main className='container'>
      <div className='error-container'>
        <img src={logo} alt='' />
        <h1>Ooops!</h1>
        <p>This page doesn't exist</p>
        <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
          <button className='black-btn'>Back Home</button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;

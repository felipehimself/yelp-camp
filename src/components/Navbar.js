import React from 'react';
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth0();
  const { pathname } = useLocation();
  const { showMenu, setShowMenu } = useGlobalContext();
  const isUser = isAuthenticated && user;

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='logo-and-btn'>
          <img src={logo} alt='logo'/>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className={showMenu? 'hamburguer active':'hamburguer'}
          >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </button>
        </div>
        <ul className={showMenu ? 'nav-menu active' : 'nav-menu'}>
          
            {pathname === '/' ? (
              ''
            ) : (
              <li>
              <Link className='link' to='/'>
                Home
              </Link>
              </li>
            )}
          
          <li>
            {isUser && user.name && (
              <p>
                User:<span className='user-name'>{user.name}</span>
              </p>
            )}
          </li>
          <li>
            <button
              className='black-btn'
              onClick={() => {
                logout({ returnTo: window.location.origin });
              }}
            >
              logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import logo from '../assets/Logo.svg';
import airbnb from '../assets/Airbnb.svg';
import booking from '../assets/Booking.svg';
import plumguide from '../assets/Plum Guide.svg';
import checkMark from '../assets/Checkmark.svg';
import heroImg from '../assets/hero-img.jpg'

import { useAuth0 } from '@auth0/auth0-react';

const SignIn = () => {
  const { loginWithRedirect } =
    useAuth0();
  return (
    <div className='home'>
      <main className='main-page '>
        <div><img src={logo} alt='logo' className='logo' /></div>
        <div className='hero'>
          <article>
            <div className='hero-text'>
              <h1>
                Explore the best <span className='break'></span> camps on Earth.
              </h1>
              <p>
                YelpCamp is a curated list of the best camping spots on{' '}
                <span className='break'></span> Earth. Unfiltered and unbiased
                reviews.
              </p>
              <ul>
                <li>
                  <img src={checkMark} alt='' />
                  Add your own camp suggestions.
                </li>
                <li>
                  <img src={checkMark} alt='' />
                  Leave reviews and expiriences.
                </li>
                <li>
                  <img src={checkMark} alt='' />
                  See locations for all camps.
                </li>
              </ul>

              <button className='black-btn' onClick={loginWithRedirect}>
                View Campgrounds
              </button>
            </div>
            <p>Partinered with:</p>
            <div className='sponsors'>
              <img src={airbnb} alt='' />
              <img src={booking} alt='' />
              <img src={plumguide} alt='' />
            </div>
          </article>
          <article ><img src={heroImg} alt="camps" className='hero-img' /></article>
        </div>
      </main>
    </div>
  );
};

export default SignIn;

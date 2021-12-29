import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';

const Welcome = () => {
  const { name, setName  } = useGlobalContext();


  return (
    <section className='welcome'>
      <h2>Welcome to YelpCamp!</h2>
      <p>
        View our hand-picked campgrounds from all over{' '}
        <span className='break'></span> the world, or add your own.
      </p>
      <div >
        <form className='search-field'>
          <input
            type='text'
            placeholder='Search for camps'
            className='search-input'
            onChange={(e)=> setName(e.target.value)}
            value={name || ''}
          />
          
        </form>
      </div>
      <p className='text-underline'>
        <Link className='link' to='/add'>
          Our add your own campground
        </Link>
      </p>
    </section>
  );
};

export default Welcome;

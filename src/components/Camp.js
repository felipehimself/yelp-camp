import React from 'react';
import { Link } from 'react-router-dom';

const Camp = ({ name, title, img, id, city }) => {
  return (
    <article className='camp'>
      <Link className='link' to={`/camps/${id}`}>
        <img src={img} alt={name}/>
      </Link>
      <h3>{name}, {city}</h3>
      <p>{title}</p>
      <Link className='link' to={`/camps/${id}`}>
        <button
          style={{ margin: 'auto', display: 'block', width: '100%' }}
          className='light-btn'
        >
          View Camp Ground
        </button>
      </Link>
    </article>
  );
};

export default Camp;

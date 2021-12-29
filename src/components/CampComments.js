import React from 'react';

const CampComments = ({ name, comment }) => {
  return (
    <div className='comment-field'>
      <h3>{name}</h3>
      <p>{comment}</p>
    </div>
  );
};

export default CampComments;

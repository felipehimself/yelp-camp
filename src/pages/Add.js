import React from 'react';
import Navbar from '../components/Navbar';
import { useGlobalContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import uniqid from 'uniqid'

const Add = () => {
  const { setData, inputs, setInputs, checkError, error } = useGlobalContext();
  let navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    checkError(false);
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({
      ...values,
      [name]: value,
      id: uniqid(),
      map: 'https://i.ibb.co/7y3SvdD/Map.png',
      reviews: [{ name: '', comment: '' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(inputs).length === 9) {
      setData((values) => [...values, inputs]);
      setInputs({});
      redirect();
    } else {
      checkError(true, 'You cannot leave empty fields');
    }
  };

  return (
    <>
      <Navbar />
      <main className='container add'>
        <h2>Add New Campground</h2>
        <div className='error-msg'>
          <p className='danger'>{error.value && <Error />}</p>
        </div>
        <form className='add-camp'>
          <label htmlFor='name'>Camp Ground Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='name'
            value={inputs.name || ''}
            onChange={handleChange}
          />
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            name='title'
            id=''
            value={inputs.title || ''}
            onChange={handleChange}
          />
          <label htmlFor='city'>City</label>
          <input
            type='text'
            name='city'
            value={inputs.city || ''}
            onChange={handleChange}
          />
          <label htmlFor='price'>Price</label>
          <input
            type='text'
            name='price'
            placeholder='$'
            value={inputs.price || ''}
            onChange={handleChange}
          />
          <label htmlFor='img'>Image</label>
          <input
            type='text'
            name='img'
            id='img'
            placeholder='www.url.com'
            value={inputs.img || ''}
            onChange={handleChange}
          />
          <label htmlFor='desc'>Description</label>
          <textarea
            style={{ resize: 'none' }}
            name='desc'
            id=''
            cols='1'
            rows='5'
            value={inputs.desc || ''}
            onChange={handleChange}
          ></textarea>
          <button className='black-btn add-camp-btn' onClick={handleSubmit}>
            Add Campground
          </button>
        </form>
      </main>
    </>
  );
};

export default Add;

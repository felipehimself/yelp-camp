import React from 'react';
import { useGlobalContext } from '../context/context';
import Error from './Error';

const CommentField = ({ id }) => {
  const {
    data,
    setData,
    comment,
    setComment,
    showCommentField,
    setShowCommentField,
    error,
    checkError
  } = useGlobalContext();


  const handleChange = (e) => {
    checkError(false)
    const name = e.target.name;
    const value = e.target.value;
    setComment((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.name && comment.comment) {
      const newData = data.map((item) => {
        if (item.id == id) {
          return { ...item, reviews: [...item.reviews, comment] };
        }
        return item;
      });
      setData(newData);
      setShowCommentField(false);
      checkError(false)
      setComment({});
    } else {
      setShowCommentField(true);
      checkError(true, 'Type your name and comment to continue')
      
    }
  };

  return (
    <div className='modal'>
      <form>
        <div className="error-msg">
          <p className='danger'>
            {error.value ? <Error /> : ''}
          </p>
        </div>
        <label htmlFor='name' className='close-btn'>
          Name <span onClick={()=> setShowCommentField(!showCommentField)}>&#10060;</span>
        </label>
        <input
          type='text'
          name='name'
          value={comment.name || ''}
          onChange={handleChange}
        />
        <label htmlFor='comment'>Leave Comment</label>
        <textarea
          style={{ resize: 'none' }}
          name='comment'
          cols='30'
          rows='15'
          value={comment.comment || ''}
          onChange={handleChange}
        ></textarea>
        <button
          className='black-btn'
          style={{ display: 'block', width: '100%' }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentField;

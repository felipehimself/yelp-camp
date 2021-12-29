import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context/context';
import Navbar from '../components/Navbar';
import CampComments from '../components/CampComments';
import CommentField from '../components/CommentField';

const SingleCamp = () => {
  const { id } = useParams();
  const {
    data,
    singleCamp,
    setSingleCamp,
    comments,
    setComments,
    readMore,
    setReadMore,
    showCommentField,
    setName,
    setShowCommentField,
  } = useGlobalContext();

  useEffect(() => {
    setShowCommentField(false);
    let camp = data.filter((item) => item.id == id)[0];
    setSingleCamp(camp);
    const { reviews } = camp;
    setComments(reviews);
    setName('');
  }, [id, data, setComments, setSingleCamp]);

  return (
    <>
      <Navbar />
      <main className='container single-camp'>
        <article className='camp-map'>
          <img src={singleCamp.map} alt='' />
        </article>
        <article className='camp-details'>
          <img
            src={singleCamp.img}
            alt={singleCamp.name}
            className='camp-pic'
          />
          <div className='title-price'>
            <h3>{singleCamp.name}</h3>
            <p>$ {singleCamp.price}/night</p>
          </div>
          {typeof singleCamp.desc != 'undefined' ? (
            <>
              <p>
                {readMore ? singleCamp.desc.slice(0, 200) : singleCamp.desc}{' '}
                <button
                  onClick={() => setReadMore(!readMore)}
                  className='read-more'
                >
                  {readMore ? '...Read more' : 'Show less'}
                </button>{' '}
              </p>
            </>
          ) : (
            ''
          )}
        </article>

        <article className='camp-comments'>
          {comments
            .filter((item) => item.comment !== '')
            .map((item, index) => {
              return <CampComments key={index} {...item} />;
            })}

          {showCommentField ? (
            ''
          ) : (
            <button
              className='black-btn button-right'
              onClick={() => setShowCommentField(!showCommentField)}
            >
              Leave a Comment
            </button>
          )}

          {showCommentField ? <CommentField id={id} /> : ''}
        </article>
      </main>
    </>
  );
};

export default SingleCamp;

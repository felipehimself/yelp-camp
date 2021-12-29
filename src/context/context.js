import React, { useContext, useState, useEffect } from 'react';
import camps from '../data/data';

const AppContext = React.createContext();

const getlocalStorage = () => {
  const d = localStorage.getItem('dados');
  if (d) {
    return JSON.parse(d);
  } else {
    return camps;
  }
};

const AppProvider = ({ children }) => {
  const [data, setData] = useState(getlocalStorage());
  const [singleCamp, setSingleCamp] = useState({});
  const [comments, setComments] = useState([]);
  const [readMore, setReadMore] = useState(true);
  const [showCommentField, setShowCommentField] = useState(false);
  const [comment, setComment] = useState({});
  const [error, setError] = useState({ value: false, msg: '' });
  const [searchCamp, setSearchCamp] = useState(getlocalStorage());
  const [name, setName] = useState('');
  const [inputs, setInputs] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    localStorage.setItem('dados', JSON.stringify(data));
  }, [data]);

  const checkError = (value, msg = '') => {
    setError({ value, msg });
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        singleCamp,
        setSingleCamp,
        comments,
        setComments,
        readMore,
        setReadMore,
        showCommentField,
        setShowCommentField,
        comment,
        setComment,
        error,
        setError,
        searchCamp,
        setSearchCamp,
        name,
        setName,
        checkError,
        inputs,
        setInputs,
        showMenu,
        setShowMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };

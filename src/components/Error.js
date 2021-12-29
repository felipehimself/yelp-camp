import React, { useEffect } from 'react';
import { useGlobalContext } from '../context/context';

const ErrorMsg = () => {
  const { error, setError } = useGlobalContext();

  useEffect(() => {
    const time = setTimeout(() => {
      setError(false, '');
    }, 3000);
    return () => {
      clearTimeout(time);
    };
  }, [error, setError]);

  return <span>{error.msg}</span>;
};

export default ErrorMsg;

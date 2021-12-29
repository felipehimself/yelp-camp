import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import { useGlobalContext } from '../context/context';
import Camp from '../components/Camp';

const Home = () => {
  const { data, name, searchCamp, setSearchCamp, checkError, error } =
    useGlobalContext();

  useEffect(() => {
    const filteredCamps = data.filter(
      (item) =>
        item.name.charAt(0).toUpperCase() === name.charAt(0).toUpperCase()
    );

    if (filteredCamps.length === 0) {
      checkError(true, 'No match for your search');
    }

    setSearchCamp(filteredCamps);

    if (!name) {
      checkError(false, '');
    }
  }, [name]);

  return (
    <>
      <Navbar />
      <div className='container'>
        <Welcome />
        {error.value && error.msg && <h2>{error.msg}</h2>}
        {name ? (
          <section className='camps'>
            {searchCamp.map((camp) => {
              return <Camp key={camp.id} {...camp} />;
            })}
          </section>
        ) : (
          <section className='camps'>
            {data.map((camp) => {
              return <Camp key={camp.id} {...camp} />;
            })}
          </section>
        )}
      </div>
    </>
  );
};

export default Home;

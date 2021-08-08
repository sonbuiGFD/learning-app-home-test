import React from 'react';
import './style.scss';

const NotFound = ({ history }) => {
  const goHome = () => {
    history.push('/');
  };

  return (
    <div className="app__page notfound__page">
      <main className="notfound__content container-fluid text-center">
        <div className="notfound__inner">
          <h3 className="notfound__title mb-5">Page not found</h3>
          <p className="notfound__desc mb-4">Maybe you must go back and try a different keyword</p>
          <button className="notfound__btn" type="button" onClick={goHome}>
            To Home Page
          </button>
        </div>
      </main>
    </div>
  );
};

export default NotFound;

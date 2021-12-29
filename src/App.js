import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ErrorPage from './pages/Error';
import SignIn from './pages/SignIn';
import SingleCamp from './pages/SingleCamp';
import Add from './pages/Add';

import PrivateRoute from './components/PrivateRoute';
import AuthWrapper from './pages/AuthWrapper';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route element={<PrivateRoute />}>
            <Route exact path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/camps/:id' element={<SingleCamp />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;

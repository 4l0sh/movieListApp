import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Signup from './pages/account/signup';
import Login from './pages/account/login';
import './App.css';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;

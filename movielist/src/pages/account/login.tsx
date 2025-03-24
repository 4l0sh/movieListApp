import { Fragment } from 'react';
import Navbar from '../../components/navbar';
import './login.css';

const Login = () => {
  return (
    <Fragment>
      <div className='mainContainer'>
        <div className='signupContainer'>
          <div className='loginCard'></div>
          <div className='signupCard'></div>
        </div>
        <Navbar />
      </div>
    </Fragment>
  );
};

export default Login;

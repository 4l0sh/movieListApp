import Navbar from '../../components/navbar';
import './login.css';
const Signup = () => {
  return (
    <div className='mainContainer'>
      <div className='signupContainer'>
        <div className='signupCard'>
          <h1>Signup</h1>
          <input type='text' id='userName' placeholder='User Name' />
          <input type='email' id='email' placeholder='Email Adress' />
          <input type='password' id='password' placeholder='Password' />
          <input
            type='password'
            id='passwordConfirm'
            placeholder='Confirm Password'
          />
          <input type='submit' value='Sign up ' />
          <p>
            already have an account ? <a href='login'>Sign in</a>
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Signup;

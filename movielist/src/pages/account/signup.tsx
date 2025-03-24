import Navbar from '../../components/navbar';
import './login.css';
const Signup = () => {
  return (
    <div className='mainContainer'>
      <div className='signupContainer'>
        <div className='signupCard'>
          <h1>Signup</h1>
          <form className='signupForm'>
            {' '}
            <input type='text' id='userName' placeholder='User Name' />
            <input type='email' id='email' placeholder='Email Address' />
            <input type='password' id='password' placeholder='Password' />
            <input
              type='password'
              id='passwordConfirm'
              placeholder='Confirm Password'
            />
            <input type='submit' value='Sign up ' />
          </form>

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

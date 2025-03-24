import Navbar from '../../components/navbar';
import './login.css';
const Signup = () => {
  return (
    <div className='mainContainer'>
      <div className='signupContainer'>
        <div className='signupCard'>
          <h1>Sign In</h1>
          <form className='signupForm'>
            {' '}
            <input type='email' id='email' placeholder='Email Adress' />
            <input type='password' id='password' placeholder='Password' />
            <input type='submit' value='Sign In ' />
          </form>

          <hr />
          <p className='signup'>
            Don't have an account ? <a href='login'>Sign Up</a>
          </p>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Signup;

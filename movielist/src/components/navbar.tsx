import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navigationContainer'>
      <div className='navItem' onClick={() => navigate('/')}>
        Home
      </div>
      <div className='navItem'>Explore</div>
      <div className='navItem'>Library</div>
      <div className='navItem' onClick={() => navigate('/signup')}>
        Account
      </div>
    </div>
  );
};

export default Navbar;

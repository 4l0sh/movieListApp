import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='navigationContainer'>
      <div className='navItem'>Home</div>
      <div className='navItem'>Explore</div>
      <div className='navItem'>Library</div>
      <div className='navItem'>Account</div>
    </div>
  );
};

export default Navbar;

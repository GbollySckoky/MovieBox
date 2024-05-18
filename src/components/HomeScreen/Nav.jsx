import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div>
      <div className={`nav ${show && 'nav_black'}`}>
        <div>
          <img 
              className='nav_logo'
              src={logo}
              alt="Netflix Logo"
              onClick={() => navigate('/')}
          />
        </div>
       <div>
        <img 
            className='nav_avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="Netflix Avatar" 
            onClick={() => navigate('/profile')}
          />
       </div>
      
      </div>
    </div>
  );
};

export default Nav;

import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import './navbar.scss';
import Profile from './129794616.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import netfelix from '.Netflix-logo-red-black-png.png';
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  window.onscroll = () => {
    setScroll(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={scroll ? 'navbar Scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <img
            src='https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png'
            alt=''
          />
          <span>HomePage</span>

          <span>Series</span>
          <span>Movies</span>
          <span>New & Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>Kids</span>
          <Notifications className='icon' />
          <img src={Profile} alt='' />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Setting</span>
              <Link to='./Login' className='Link'>
                <span>LogeOut</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

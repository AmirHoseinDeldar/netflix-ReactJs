import { Search, Notifications, ArrowDropDown } from '@material-ui/icons';
import './navbar.scss';
import Profile from './129794616.jpg';
// import netfelix from '.Netflix-logo-red-black-png.png';
const Navbar = () => {
  return (
    <div className='navbar'>
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
          <Search />
          <span>Kids</span>
          <Notifications />
          <img src={Profile} alt='' />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

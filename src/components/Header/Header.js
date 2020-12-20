import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';
import HomeIcon  from '@material-ui/icons/Home'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
const Header = ()=>{

    const x = ()=>{
        const mediaQuery = window.matchMedia('(max-width: 360px)')

        // Check if the media query is true
        if (mediaQuery.matches) {
          // Then trigger an alert
          return 'medium'
        }
        return 'large'
    }
    return(
        <div className="navMenu">
          
           <div className="navMenu__search">
           <div className="navMenu__logo">
                logo
            
            </div>
            <div className="navMenu__serachBar">
                <SearchIcon  fontSize='small' className="searchIcon"/>
                <input className="navMenu__serachInput" type='search' placeholder='search'/>

            </div>
            
           </div>

           <ul className="navMenu__list">
        
                <li className="navMenu__listItem"><a className="navMenu_itemLink"> <HomeIcon fontSize={x() } /> </a></li>
                <li className="navMenu__listItem"><a className="navMenu_itemLink" ><NotificationsIcon fontSize={x() }/> </a></li>
                <li className="navMenu__listItem"><a className="navMenu_itemLink" >  <AccountCircleIcon fontSize={x() }/> </a></li>
                <li className="navMenu__listItem"><MenuIcon/></li>
           </ul>
        </div>
   
    )
    
}
export default Header
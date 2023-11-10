import React, { useEffect, useState } from 'react';
import '../Styles/Navbar.css';
import fb from '../Images/facebookIcon.png';
import twitter from '../Images/twitterIcon.png';
import linkedIn from '../Images/linkedInIcon.png';
import ham from '../Images/hamMenuIcon.png';
import left from '../Images/leftIcon.png';
import right from '../Images/rightIcon.png';



function Nav({ onLeftClick, onRightClick, onMenuClick }) {
    
  return (
    <>
    <nav>
        <div className='hamburger'>
            <img src={ham} alt="hamburgerIcon" onClick={onMenuClick}/>
        </div>
        <div className='social'>
            <img src={fb} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedIn} alt="linkedIn" />
        </div>
        <div className='counter'></div>
        <div className='changePage'>
          <div className='arrowLeftIcon'>
            <img src={left} alt="left" onClick={onLeftClick} />
          </div>
          <div className='arrowRightIcon'>
            <img src={right} alt="right" onClick={onRightClick} />
          </div>          
        </div>
    </nav>
    </>
  );
}

export default Nav;
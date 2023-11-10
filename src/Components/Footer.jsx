import React, { useEffect, useState } from 'react';
import '../Styles/Footer.css';



function Footer() {
    
  return (
    <>
    <footer>
        <div className='designBy'>
            <p>WildLife Design <br /> <span> by Emelie Ribring</span> <br /> <br />Inspired <br /> <span>by Tomushka Corvys</span></p>
        </div>
        <div className='footerText'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span>Lorem ipsum dolor.</span></p>
        </div>
        <div className='numbers'>
            <div><p>243 <br /> <span>Lorems</span></p></div>
            <div><p>400 <br /> <span>Animals</span></p></div>
            <div><p>Join us</p></div>
        </div>
    </footer>
    </>
  );
}

export default Footer;
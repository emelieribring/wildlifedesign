import React, { useState } from 'react';
import '../Styles/Home.css';
import Nav from './Navbar';
import Footer from './Footer';

import firstBg from '../Images/bgElephant.png'
import image1 from '../Images/birdsBg.jpg'; // Import your images
import image2 from '../Images/TigerBg.png';
import image3 from '../Images/giraffeBg.jpg';
import image4 from '../Images/bgElephant.png';




function Home() {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(`url("${firstBg}")`);  
  const [isMenuVisible, setIsMenuVisible] = useState(false); // State to control menu visibility
  const images = [image1, image2, image3, image4]; // Add more images as needed

  const handleLeftClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // Change background image URL logic based on your requirements
    setBackgroundImage(`url("${images[currentImageIndex]}")`);
  };

  const handleRightClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Change background image URL logic based on your requirements
    setBackgroundImage(`url("${images[currentImageIndex]}")`);
  };

  const handleMenuClick = () => {
    setIsMenuVisible(!isMenuVisible); // Toggle menu visibility
  };


  return (
    <>
    <div className='wrapper' style={{ backgroundImage: backgroundImage }}>
        <Nav  onLeftClick={handleLeftClick} onRightClick={handleRightClick} onMenuClick={handleMenuClick} ></Nav>
        <h1>Adventure.</h1>
        <div className='content'>
          <p>Explore the unexplored</p>
        </div>
        <Footer></Footer>
        {isMenuVisible && 
        <div className='hamMenu'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>  
        </div>}
    </div>
    </>
  );
}

export default Home;
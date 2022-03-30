import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/space2.mp4' autoPlay loop muted />
        <h1>Alex Granada</h1>
        <p>Ingeniero en desarrollo SIG - 
          <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[' Geomática', ' Satelital', ' Web/Movil', ' Code']}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            GEOPortal <i className='fas fa-globe' />
          </Button>
        </div>
        
    </div>
  );
}

export default HeroSection;
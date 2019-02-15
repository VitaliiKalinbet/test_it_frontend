// Core
import React from 'react';
import Particles from 'react-particles-js';

// Instruments
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.Home}>
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
      
    </div>
  );
};

export default Home;
// Core
import React from 'react';
import {Link} from 'react-router-dom';
import Particles from 'react-particles-js';

// Instruments
import { home } from '../../languages/ru/Home'
import style from './Home.module.css'

const part = {
	"particles": {
		"number": {
			"value": 100
		},
		"size": {
			"value": 2
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
}
const Home = () => {
  return (
    <div className={style.Home}>

    <div className={style.title}>
         <h1> {home.title}</h1>
          <p>{home.post}</p>
          <Link to='/instruction' className={style.btn}>Начать тестирование</Link>
    </div>
    <Particles params={part} />
    </div>
  );
};

export default Home;
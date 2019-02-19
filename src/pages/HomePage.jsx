import React from 'react';
import Home from '../components/Home/Home';
import style from './HomePage.module.css';
import Header from '../components/Header/Header';

const HomePage = () => {
    return (
        <div className={style.HomePage}>
            <Header />
            <Home />
        </div>
    );
};

export default HomePage;
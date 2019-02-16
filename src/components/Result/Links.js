// Core 
import React from 'react';
// 
import iconFacebook from '../../assets/img/facebook.png';
// import sendIcon from '../../assets/img/send.png';


// Instruments
import style from './Result.module.css';

const title = ['Отправит результат на почту'];


const Links = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapperShadow}>

                <h1 className={style.titleParagraph}>{title}</h1>

               <div className={style.shareFB}>
                    <input className={style.inputEmail} type='email' placeholder='Email' />
                    <button className={style.inputSubmit} type='submit'>&#10148;</button>
                </div>

                    <div className={style.wrapper}>
                        <a href='https://www.facebook.com/GoITeens/' target="_blank" rel="noopener noreferrer">
                            <img src = { iconFacebook } alt = " Favebook " width = '35' height = '35' />
                        </a>
                    </div>
            </div>
        </div>
    );
};

export default Links;
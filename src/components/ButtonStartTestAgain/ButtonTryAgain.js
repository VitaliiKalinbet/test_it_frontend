import React from 'react';
import {Link} from 'react-router-dom';
import style from './Button.module.css';

const ButtonTryAgain = () => {
    return (
        <div className={style.wrapper}>
           <Link to='/test' className={style.btn}> Начать тестирование заново </Link>
        </div>
    );
};
export default ButtonTryAgain;
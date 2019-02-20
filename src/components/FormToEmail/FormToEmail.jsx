import React from 'react';
import iconFacebook from '../../assets/img/facebook.png';
import style from './FormToEmail.module.css';
const title = ['Отправить результат на почту'];

const FormToEmail = ({ email, handelChange, sendResultOnEmail, messageFromSendEmail }) => {
    return (
        <div className={style.wrapper}>
            <h1 className={style.titleParagraph}>{title}</h1>
            <form className={style.shareFB} onSubmit={(e) => sendResultOnEmail(e)}>
                <input onChange={handelChange} name="email" value={email} className={style.inputEmail} type='email' placeholder='Email' />
                <button className={style.inputSubmit} type='submit'>&#10148;</button>
            </form>
            {messageFromSendEmail ? <p className={style.message}>{messageFromSendEmail}</p> : null}
            <div className={style.wrapper_facebook}>
                <a href='https://www.facebook.com/GoITeens/' target="_blank" rel="noopener noreferrer">
                    <img src={iconFacebook} alt=" Favebook " width='35' height='35' />
                </a>
            </div>
        </div>
    );
};

export default FormToEmail;
import React from 'react';
import {Link} from 'react-router-dom';
import style from './ProfessionDescr.module.css';

const ProfessionDescr = ({descriptionText = "", descriptionTitle = "", dutiesText = "" , dutiesTitle = "", perspectivesText = "" , perspectivesTitle = "", title = "", typeProfession = "", }) => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.titleParagraph}> {title} </h2>
            <p className={style.paragraph}>{descriptionText}</p>

            <h2 className={style.titleParagraph}> {dutiesTitle} </h2>
            <p className={style.paragraph}>{dutiesText}</p>

            <h2 className={style.titleParagraph}> {perspectivesTitle} </h2>
            <p className={style.paragraph}>{perspectivesText}</p>

            <Link to='/test' className={style.btn}>Начать тестирование заново</Link>
        </div>
    );
};

export default ProfessionDescr;
import React from 'react';
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
        </div>
    );
};

export default ProfessionDescr;
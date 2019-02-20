import React from 'react';
import style from './ProfessionDescr.module.css';

const ProfessionDescr = ({descriptionText = "", descriptionTitle = "", dutiesText = "" , dutiesTitle = "", perspectivesText = "" , perspectivesTitle = "", title = "", typeProfession = "", }) => {
    return (
        <div className={style.wrapper}>
            <h2 className={style.name_profession}> {title} </h2>
            <h4 className={style.titleParagraph}> Описание </h4>
            <p className={style.paragraph}>{descriptionText}</p>

            <h4 className={style.titleParagraph}> {dutiesTitle} </h4>
            <p className={style.paragraph}>{dutiesText}</p>

            <h4 className={style.titleParagraph}> {perspectivesTitle} </h4>
            <p className={style.paragraph}>{perspectivesText}</p>
        </div>
    );
};

export default ProfessionDescr;
// Core 
import React from 'react';
import {Link} from 'react-router-dom';

// Instruments
import style from './Result.module.css';

const Task = ({descriptionText = "", descriptionTitle = "", dutiesText = "" , dutiesTitle = "", perspectivesText = "" , perspectivesTitle = "", title = "", typeProfession = "", }) => {
    return (
        <div>
            <h2 className={style.titleParagraph}> {title} </h2>
            <p className={style.paragraph}>{descriptionText}</p>
            <h2 className={style.titleParagraph}> {dutiesTitle} </h2>


            <div className ={ style.tasks}>

                {dutiesText}
            </div>
            <h2 className={style.titleParagraph}> {perspectivesTitle} </h2>
            <p className={style.paragraph}>{perspectivesText}</p>

            <Link to='/test' className={style.btn}>Начать тестирование</Link>
        
        </div>
    );
};

export default Task;
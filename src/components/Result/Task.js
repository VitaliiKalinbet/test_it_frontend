// Core 
import React from 'react';
import {Link} from 'react-router-dom';

// Instruments
import style from './Result.module.css';

const Task = () => {
    return (
        <div>
            <h2 className={style.titleParagraph}> QA Тестировщик </h2>
            <p className={style.paragraph}><b>QA Specialist </b> - это создание клиентской части сайта. Front-end разработчик занимается версткой шаблона сайта и созданием пользовательского интерфейса. Обычно front-end разработчик — это мастер на все руки. Он просто обязан обладать талантом дизайнера, быть искусным верстальщиком и хорошим программистом. </p>
            <h2 className={style.titleParagraph}> Задачи </h2>

            <div className ={ style.tasks}>

                <input type="checkbox" id="fruit1" name="fruit-1" value="Apple" checked />
                <label htmlFor="fruit1">планирование процес тестирования</label>

                <input type="checkbox" id="fruit2" name="fruit-1" value="Apple" checked />
                <label htmlFor="fruit2">выполнять ручные тестирования web приложением</label>

                <input type="checkbox" id="fruit2" name="fruit-1" value="Apple" checked />
                <label htmlFor="fruit2">выполнять ручные тестирования web приложением</label>
            </div>

            <Link to='/test' className={style.btn}>Начать тестирование</Link>
        
        </div>
    );
};

export default Task;
// Core 
import React from 'react';

const Task = ({ title, id, profile, text, tasks}) => {
    return (
        <div>
            <h2> Title: {title}</h2>
            <p> Profile: {profile}</p>
            <p>{text}</p>
            <ul>
                {/* {
                    tasks.map(task =>(
                        <li key={id}><input type="checkbox" checked />{task}</li>
                        ))
                } */}
            </ul>
        </div>
    );
};

export default Task;
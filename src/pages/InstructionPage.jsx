import React from 'react';
import style from './InstructionPage.module.css';
import Instruction from '../components/Instruction/Instruction';
import Header from '../components/Header/Header';

const InstructionPage = () => {
    return (
        <div className={style.test}>
            <Header/>
            <Instruction/>
        </div>
    );
};

export default InstructionPage;
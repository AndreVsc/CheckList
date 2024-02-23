// FormBlock.js

import React from 'react';
import './FormBlock.css';
import Button from '../button/Button';
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

export default function FormBlock({ reset }) {

    const backShow = () => {
        reset(false);
    }

    return (
        <div className="overlayForm">
            <div className='containerForm'>
                <form id='formCollection'>
                    <div id='inputsCollection'>
                        <input className='inputChild inputText' name='nameCollection' type="text" placeholder='Nome da Coleção' />
                        <select className='selectOption' name='selectCollection'>
                            <option value='senai'>Senai</option>
                            <option value='sesi'>Sesi</option>
                        </select>
                    </div>
                    <div id='buttonsCollection'>
                        <Button func={() => backShow()} value={<ImCross/>} classN='bnt-b' />
                        <Button func={() => backShow()} value={<FaCheck/>} classN='bnt-b' />
                    </div>
                </form>
            </div>
        </div>
    );
}



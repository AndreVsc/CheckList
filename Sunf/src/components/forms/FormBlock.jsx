import React, { useState, useEffect, useRef } from 'react';
import './FormBlock.css';
import Button from '../button/Button';
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

const COLLECTION_DATA_KEY = 'keyCollectionData';

export default function FormBlock({ reset, updateFlag, setUpdateFlag }) {
    const isMounted = useRef(true);
    const [collectionName, setCollectionName] = useState({});
    const [instituicao, setInstituicao] = useState('senai');
    const [collectionData, setCollectionData] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        isMounted.current = true;
        setCollectionData(JSON.parse(localStorage.getItem(COLLECTION_DATA_KEY)) || []);
        setId(parseInt(localStorage.getItem('keyCollectionsId')) || 0);

        return () => {
            isMounted.current = false;
        };
    }, [updateFlag]);

    function enviarProdutos() {
        if (isMounted.current) {
            const novoProduto = { ...collectionName, id: id + 1, instituicao: instituicao };
            const newData = [...collectionData, novoProduto];

            setCollectionData(newData);
            localStorage.setItem(COLLECTION_DATA_KEY, JSON.stringify(newData));
            localStorage.setItem('keyCollectionsId', id + 1);

            setId(prevId => prevId + 1);
            reset(false);

            // Atualizar o sinalizador de atualização
            setUpdateFlag(prevFlag => !prevFlag);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCollectionName((prevName) => ({ ...prevName, [name]: value }));
    };

    const handleInstituicaoChange = (e) => {
        setInstituicao(e.target.value);
    };

    const backShow = () => {
        reset(false);
    }

    return (
        <div className="overlayForm">
            <div className='containerForm'>
                <form id='formCollection' onSubmit={(e) => e.preventDefault()}>
                    <div id='inputsCollection'>
                        <input className='inputChild inputText' name='nome' type="text" onChange={handleInputChange} placeholder='Nome da Coleção' />
                        <select className='selectOption' name='instituicao' onChange={handleInstituicaoChange} value={instituicao}>
                            <option value='senai'>Senai</option>
                            <option value='sesi'>Sesi</option>
                        </select>
                    </div>
                    <div id='buttonsCollection'>
                        <Button func={backShow} value={<ImCross />} classN='bnt-b' />
                        <Button func={enviarProdutos} value={<FaCheck />} classN='bnt-b' />
                    </div>
                </form>
            </div>
        </div>
    );
}

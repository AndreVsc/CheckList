import React, { useEffect, useState } from 'react';
import Button from '../button/Button';
import { FaPlus } from 'react-icons/fa';
import './MenuCheck.css';
import FormBlock from '../forms/FormBlock';
import CollectionBlock from '../collection/CollectionBlock';

const COLLECTION_DATA_KEY = 'keyCollectionData';

export default function MenuCheck() {
    const [collections, setCollections] = useState([]);
    const [show, setShow] = useState(false);
    const [updateFlag, setUpdateFlag] = useState(false); // Novo estado para sinalizar atualizações

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === COLLECTION_DATA_KEY) {
                setCollections(JSON.parse(e.newValue));
            }
        };

        window.addEventListener('storage', handleStorageChange);

        const storedData = localStorage.getItem(COLLECTION_DATA_KEY);
        if (storedData) {
            setCollections(JSON.parse(storedData));
        }

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [updateFlag]);

    function showAll() {
        setShow(true);
    }

    useEffect(() => {
        if (show) {
            return () => {
                setShow(false);
            };
        }
    }, [show]);

    return (
        <div className='containerMenu'>
            <div className='menuPrincipal'>
                {collections && collections.length > 0 ? (
                    <CollectionBlock collections={collections} />
                ) : (
                    <p className='textp'>Nenhuma Coleção</p>
                )}
                <Button func={showAll} value={<FaPlus fontSize={15} />} classN='bnt-b' />
            </div>
            {show && <FormBlock reset={setShow} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} />}
        </div>
    );
}

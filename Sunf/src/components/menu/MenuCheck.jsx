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

    useEffect(() => {
        // Função para lidar com o evento de storage
        const handleStorageChange = (e) => {
            if (e.key === COLLECTION_DATA_KEY) {
                // Atualizar o estado com os dados mais recentes do Local Storage
                setCollections(JSON.parse(e.newValue));
            }
        };

        // Adicionar o ouvinte do evento de storage
        window.addEventListener('storage', handleStorageChange);

        // Carregar as coleções iniciais do Local Storage
        const storedData = localStorage.getItem(COLLECTION_DATA_KEY);
        if (storedData) {
            setCollections(JSON.parse(storedData));
        }

        // Remover o ouvinte do evento de storage ao desmontar o componente
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

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
            {show && <FormBlock reset={setShow} />}
        </div>
    );
}

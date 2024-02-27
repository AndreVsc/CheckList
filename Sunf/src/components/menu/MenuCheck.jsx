import React,{useEffect,useState} from 'react';
import Button from '../button/Button';
import {FaPlus} from 'react-icons/fa';
import './MenuCheck.css';
import FormBlock from '../forms/FormBlock';
import CollectionBlock from '../collection/CollectionBlock';

export default function MenuCheck() {

    const [collection, setCollection] = useState([]);
    const [show, setShow] = useState(false);
    const [id, setId] = useState(0);

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
        <>
            <div className='containerMenu'>
                <div className='menuPrincipal'>                
                    {collection==''?(<p className='textp'>Nenhum Coleção</p>):(<CollectionBlock/>)}
                    <Button func={() => showAll()} value={<FaPlus fontSize={15} />} classN='bnt-b' />
                </div>
                {show && <FormBlock reset={setShow} />}
            </div>
        </>
    );
}

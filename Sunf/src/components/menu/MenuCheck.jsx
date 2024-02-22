import React,{useEffect,useState} from 'react';
import Button from '../button/Button';
import {AiOutlineLeft} from 'react-icons/ai';
import './MenuCheck.css';
import FormBlock from '../forms/FormBlock';

export default function MenuCheck() {

    const [collection, setCollection] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedCollectionId, setSelectedCollectionId] = useState(null);
    const [id, setId] = useState(0);

    function showAll() {
        setSelectedCollectionId();
        setShow(true);
    }
    
    useEffect(() => {
        if (show) {
            return () => {
                setSelectedCollectionId(null);
                setShow(false);
            };
        }
    }, [show]);
    

    return (
        <>
            <div className='containerMenu'>
                <div className='menuPrincipal'>                
                    {collection==''?(<p className='textp'>Nenhum Produto</p>):(<p>Teste</p>)}
                    <Button func={() => showAll()} value={<AiOutlineLeft fontSize={15} />} classN='bnt-b' />
                </div>
                {show && <FormBlock reset={setShow}/>}
            </div>
        </>
    );
}

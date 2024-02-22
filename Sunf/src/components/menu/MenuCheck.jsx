import React,{useEffect,useState} from 'react';
import Button from '../button/Button';
import {AiOutlineLeft} from 'react-icons/ai';
import './MenuCheck.css';


export default function MenuCheck() {

    const [block, setBlock] = useState([]);
    const [show, setShow] = useState(false);
    const [selectedBlockId, setSelectedBlockId] = useState(null);
    const [id, setId] = useState(0);

    function showAll() {
        setSelectedBlockId();
        setShow(true);
    }
    
    useEffect(() => {
        if (show) {
            return () => {
                setSelectedBlockId(null);
                setShow(false);
            };
        }
    }, [show]);
    

    return (
        <>
            <div className='containerMenu'>
                <div className='menuPrincipal'>                
                    {block==''?(<p className='textp'>Nenhum Produto</p>):(<p>Teste</p>)}

                    <Button func={() => showAll()} value={<AiOutlineLeft fontSize={15} />} classN='bnt-b' />
                </div>
            </div>
        </>
    );
}

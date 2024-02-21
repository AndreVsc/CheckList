import React,{useEffect,useState} from 'react';
import Button from '../button/Button';
import {AiOutlineLeft} from 'react-icons/ai';
import FormBlock from '../forms/FormBlock';


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
            <div className='containerAdicionar'>
                <div id='containerRolagem'>                
                    {block==''?(<p className='textp'>Nenhum Produto</p>):(<p>Teste</p>)}
                </div>
                <div className='settingsAdicionar'>
                    <Button func={() => showAll()} value={<AiOutlineLeft fontSize={15} />} classN='bnt-b' />
                </div>
                {show && <FormBlock reset={setShow}/>}
            </div>
        </>
    );
}

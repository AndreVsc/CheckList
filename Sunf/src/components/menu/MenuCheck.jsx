import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {HiSearch} from 'react-icons/hi';
import {AiOutlineLeft} from 'react-icons/ai';


export default function MenuCheck() {

    const [block, setBlock] = useState([]);
    const [outherBlock, setOutherBlock] = useState([]);
    const [numBlock, setNumBlock] = useState(0);
    const [id, setId] = useState(0);
    
    useEffect(()=>{
        const storedData = localStorage.getItem("produtoData");
        const storedId = localStorage.getItem("idProduto");
        if (storedData) {
            setBlock(...block,JSON.parse(storedData));
            setId(JSON.parse(storedId));
        }
        if(numBlock!=0){
            setBlock(block);
            setNumBlock(0);
        }
    },[]);
    
    useEffect((storedId)=>{

        if(id>0){
            localStorage.setItem("produtoData",JSON.stringify(block));
        }else if(id==0 && storedId){
            setId(localStorage.getItem("idProduto"));
        }
        
    },[id]);
    
    const alterBlock = ()=> {
        if(numBlock!=0){
            setBlock(outherBlock);
            setNumBlock(0);
        }
    }
    
    const onDeleteBlock = (blocoId) => {
        if(numBlock!=1){
            const novaListaDeBlocos = block.filter((bloco) => bloco.id !== blocoId);
            localStorage.setItem("produtoData",JSON.stringify(novaListaDeBlocos));
            setBlock(novaListaDeBlocos);
        }
    }

    return (
        <div className='containerAdicionar'>
            <div id='containerRolagem'>                
                {block==''?(<p className='textp'>Nenhum Produto</p>):(<BlockLista  id={id} blocos={block} onDeleteBlock={onDeleteBlock} alter={alterBlock}/>)}
            </div>
            <div className='settingsAdicionar'>
                <Link className='bnt-b' to={'/FormBlock'}>Novo</Link>
            </div>
        </div>
    );
}

import React from 'react';
import './FormBlock.css';
import Button from '../button/Button';

export default function FormBlock({reset}) {

  const backShow = () =>{
      reset(false);
  }

  return (
    <div className="overlayForm" >
      <div className='containerForm'>
        <form id='formEstoque'>
          <div id='inputsEstoque'>
            <input className='inputChild inputText' name='produto' type="text" placeholder='Nome do Produto' />
            <input className='inputChild-2 inputText' name='marca' type="text" placeholder='Marca'/>
            <input className='inputChild-3 inputText' name='quantidade' type="number" placeholder='Quantidade'/>
            <input className='inputChild-4 inputText' name='fornecedor' type="text" placeholder='Fornecedor'/>
            <input className='inputChild-5 inputText' name='minimo' type="number" placeholder='Minimo'/>
            <input className='inputChild-6 inputText' name='venda' type="number" placeholder='Valor de Venda'/>
            <input className='inputChild-7 inputText' name='custo' type="number" placeholder='Custo do Produto'/>
          </div>
          <Button func={() => backShow()} value={'Voltar'} classN='bnt-b'/>
        </form>
      </div>
    </div>
  )
}
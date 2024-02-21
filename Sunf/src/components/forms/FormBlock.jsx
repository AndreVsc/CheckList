import React from 'react';
import './FormBlock.css';

export default function FormBlock({reset}) {

  const voltarDetalhes = () =>{
      reset(false);
  }

  return (
    <div className="overlayDetalhes" >
      <div className='containerForm'>
        <form id='formEstoque'>
          <div id='inputsEstoque'>
            <input className='inputChild inputText' name='produto' value={produto.produto} onChange={handleInputChange} type="text" placeholder='Nome do Produto' />
            <input className='inputChild-2 inputText' name='marca' value={produto.marca} onChange={handleInputChange} type="text" placeholder='Marca'/>
            <input className='inputChild-3 inputText' name='quantidade' value={produto.quantidade} onChange={handleInputChange} type="number" placeholder='Quantidade'/>
            <input className='inputChild-4 inputText' name='fornecedor' value={produto.fornecedor} onChange={handleInputChange} type="text" placeholder='Fornecedor'/>
            <input className='inputChild-5 inputText' name='minimo' value={produto.minimo} onChange={handleInputChange} type="number" placeholder='Minimo'/>
            <input className='inputChild-6 inputText' name='venda' value={produto.venda} onChange={handleInputChange} type="number" placeholder='Valor de Venda'/>
            <input className='inputChild-7 inputText' name='custo' value={produto.custo} onChange={handleInputChange} type="number" placeholder='Custo do Produto'/>
          </div>
          <textarea className='inputArea'  name='obs' value={produto.obs} onChange={handleInputChange} type="text" placeholder='Obs'/>
          <Link to="/" onClick={enviarProdutos} id='inputBnt' className='bnt-b link-btn'> Criar Produto </Link> 
        </form>
      </div> 
    </div>
  )
}
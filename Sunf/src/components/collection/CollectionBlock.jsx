import React from 'react';

function CollectionBlock() {
  return (
    <>
        <ul id='listBlocks'>
            {blocos.map((bloco) => (
            <li key={bloco.id}>
                <p id='idBlock'>{bloco.venda} R$</p>
                <p onClick={() => mostrarDetalhes(bloco.id)} className='nomeProduto'>{bloco.produto}</p>
            </li>
            ))}
        </ul>
    </>
  );
}

export default CollectionBlock;
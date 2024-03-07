import React from 'react';
import './CollectionBlock.css';
import { Link } from 'react-router-dom';

function CollectionBlock({ collections }) {

  return (
    <ul id='collectionUl'>
      {collections.map((collection) => (
        <li key={collection.id} id='collectionLi'>
          <div id="textList">
            <p id='collectionName'>{collection.nome}</p>
            <p id='collectionInst'>{collection.instituicao}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CollectionBlock;

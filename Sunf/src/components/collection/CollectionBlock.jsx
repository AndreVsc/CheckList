import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionBlock.css';

function CollectionBlock({ collections }) {
  return (
      <ul id='collectionUl'>
        {collections.map((collection) => (
          <Link key={collection.id} to={`/${collection.id}`}>
            <li id='collectionLi'>
              <div id="textList">
                <p id='collectionName'>{collection.nome}</p>
                <p id='collectionInst'>{collection.instituicao}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
  );
}

export default CollectionBlock;

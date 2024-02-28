import React from 'react';
import { Link } from 'react-router-dom';
import './CollectionBlock.css';

function CollectionBlock({ collections }) {
  return (
    <>
      <ul id='collectionList'>
        {collections.map((collection) => (
            <p id='collectionInst'>{collection.instituicao}</p>
          <Link key={collection.id} to={`/${collection.id}`}>
            <li>
              <p id='collectionName'>{collection.nome}</p>
              <p id='collectionInst'>{collection.instituicao}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default CollectionBlock;

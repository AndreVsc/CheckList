import React from 'react';

function CollectionBlock({ collections }) {
  return (
    <>
      <ul id='collectionList' to={'/estoque'}>
        {collections.map((collection) => (
          <li key={collection.id}>
            <p id='collectionName'>{collection.nome}</p>
            <p id='collectionInst'>{collection.instituicao}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default CollectionBlock;

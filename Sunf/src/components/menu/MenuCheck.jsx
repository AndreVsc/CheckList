import React, { useEffect, useState } from 'react';
import './MenuCheck.css';
import FormBlock from '../forms/FormBlock';
import CollectionBlock from '../collection/CollectionBlock';

const COLLECTION_DATA_KEY = 'keyCollectionData';

export default function MenuCheck({setShow, show }) {
  const [collections, setCollections] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [updateFlag, setUpdateFlag] = useState(false);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === COLLECTION_DATA_KEY) {
        setCollections(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);

    const storedData = localStorage.getItem(COLLECTION_DATA_KEY);
    if (storedData) {
      setCollections(JSON.parse(storedData));
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [updateFlag]);

  useEffect(() => {
    if (show) {
      return () => {
        setShow(false);
      };
    }
  }, [show]);

  const handleCollectionSelect = (id) => {
    const updatedSelectedCollections = selectedCollections.includes(id)
      ? selectedCollections.filter((selectedId) => selectedId !== id)
      : [...selectedCollections, id];
    setSelectedCollections(updatedSelectedCollections);
  };

  return (
    <div className='containerMenu'>
      <div className='menuPrincipal' id='containerRolagem'>
        {collections && collections.length > 0 ? (
          <CollectionBlock
            collections={collections}
            onCollectionSelect={handleCollectionSelect}
          />
        ) : (
          <p className='textp'>Nenhuma Coleção</p>
        )}
      </div>
      {show && <FormBlock reset={setShow} updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} />}
    </div>
  );
}

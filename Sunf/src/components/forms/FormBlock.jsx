import React from 'react';
import './FormBlock.css';

export default function FormBlock({reset}) {

  const voltarDetalhes = () =>{
      reset(false);
  }

  return (
    <div className="overlayDetalhes" >
       
    </div>
  )
}
import React, { useState } from 'react';
import NavBar from "../components/navbar/NavBar";
import MenuCheck from "../components/menu/MenuCheck";

export default function HomePage() {
  const [show, setShow] = useState(false);

  const showAll = () => {
    setShow(true);
  };

  return (
    <div>
      <NavBar showAll={showAll}/>
      <MenuCheck showAll={showAll} setShow={setShow} show={show}/>
    </div>
  );
}

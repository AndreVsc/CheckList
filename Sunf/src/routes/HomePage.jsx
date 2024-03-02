import NavBar from "../components/navbar/NavBar"; 
import MenuCheck from "../components/menu/MenuCheck";
import { useState} from "react";

export default function HomePage() {
  
  const [show, setShow] = useState(false);

  function showAll() {
    setShow(true);
  }

  return (
    <div>
      <NavBar showAll={showAll} setShow={setShow}/>
      <MenuCheck showAll={showAll} setShow={setShow} show={show}/>
    </div>
  );
} 
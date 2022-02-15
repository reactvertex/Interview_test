import React from "react";
import { FormNavbar} from './styleComponent'
import previous from '../../assests/previous.png';
import { useNavigate } from "react-router-dom";


export default function FormNav() {

    let navigate = useNavigate();
    const handleBack = () =>{
        navigate("/")
    }

  return (
    <FormNavbar>
      <nav className="navbar navbar-expand-lg navbar-light form_Navbar">
        <a className="navbar-brand" href="#">
          <img height={30}  width={30} className='mx' src={previous} alt='previous' onClick={handleBack}/> 
        </a>
    
      </nav>
    </FormNavbar>
  );
}

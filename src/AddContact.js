import React, { useEffect, useRef, useState } from "react";

export default function AddContact() {
  const [contactTypes, setContactTypes] = useState("personal");
  const contactName = useRef("");
  const contactPhone = useRef("");
  const [isWhatsapp, setIsWhatsApp] = useState(true);

  const dropDownHandler = (event) => {
    console.log(event.target.value);
    setContactTypes(event.target.value);
  };

  const checkBoxHandler = () => {
    setIsWhatsApp((prev) => !prev);
  };

  const formHandler = (event) => {
      event.preventDefault();
      if(localStorage.getItem('contacts')){
          let tempLocalStorage = localStorage.getItem('contacts');
          tempLocalStorage.push()
        localStorage.setItem("contacts",[
              {name: contactName.current.value,
              phone: contactName.current.value,
              isWhatsapp: isWhatsapp,
              contactTypes: contactTypes}
        ]);    
        }
    else{
        localStorage.setItem("contacts",JSON.stringify([
              {name: contactName.current.value,
              phone: contactName.current.value,
              isWhatsapp: isWhatsapp,
              contactTypes: contactTypes}
        ]));    
    }

};

  return (
    <div>
      <form onSubmit={formHandler}>
        <input placeholder="Name" required ref={contactName}></input>
        <input placeholder="Phone" type="phone" required ref={contactPhone}></input>
        Whatsapp:{" "}
        <input
          type="checkbox"
          checked={isWhatsapp}
          onChange={checkBoxHandler}
          name="whatsapp"
        ></input>
        <select onChange={dropDownHandler}>
          <option value={"personal"}>Personal</option>
          <option value={"office"}>Office</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

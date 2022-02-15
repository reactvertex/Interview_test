import React, { useCallback, useEffect,useRef,useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const [contactsList,setContactsList] = useState(false); 
   
    let navigate = useNavigate();

    // {
    //     name:"",
    //     phone:"",
    //     type :[],
    //     isWhatsapp:false,
    //     image:"",
    // }


    useEffect(()=>{
        if(localStorage.getItem("contacts")){

            setContactsList(localStorage.getItem("contacts"));
        };
    },[]);
  return (
    <div>
        {contactsList?<ContactList contacts={contactsList} />:<><h1>No contacts Found Kindly Add</h1></>}
        <button onClick={()=>{navigate("/add-contact")}}>Add Contacts</button>
    </div>
  );
}
function ContactList({contacts}){

    return (
        <>
            {JSON.parse(contacts)?.map((contact)=>{

                return(
                <>
                <ContactCard 
                    name={contact.name}
                    phone={contact.phone}
                    type={contact.type}
                    image={contact.image}
                    isWhatsapp={contact.isWhatsapp}
                />
                </>)
            })}
        </>
    );
}

function ContactCard(props){
    return (
        <div>
            <span>Name: {props.name}</span>
            <span>Phone: {props.phone}</span>
            <span>Type: {props.type}</span>
            <span>Whatsapp Available: {props.isWhatsapp?"Yes":"No"}</span>
            <image src={props.image}></image>
        </div>
    )
}



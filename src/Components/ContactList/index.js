import React,{useEffect,useState} from "react";
import ContactTable from "./ContactTable";
import { useNavigate } from "react-router-dom";
import { ContactPage } from "./styleComponents";

 function ContactList(props) {
  const [contactsList, setContactsList] = useState(false);
 
  const getDataList = () =>{
    if (localStorage.getItem("contacts")) {
      return JSON.parse(localStorage.getItem("contacts"))
  };
  }

  useEffect(() => {
    let contactData = getDataList()  
    setContactsList(contactData);
  }, []);

  let navigate = useNavigate();
  const handleUpdate = (val, index) =>{
    navigate(`/edit-contact/${index + 1}`, {
      state: {
        data: val,
        id : index
      }
    });
  }

  const handleDelete = (val, index) =>{
    let tempLocalStorage = JSON.parse(localStorage.getItem("contacts"));
    let filteredData =   tempLocalStorage.filter((el,i) => i !== index )
    localStorage.setItem("contacts", JSON.stringify(filteredData));
    setContactsList(filteredData);
  }
  return (
    <ContactPage>
      <div className="d-flex justify-content-between mx-5 align-items-center">
        <div className="text_name">Contact List</div>
        <button
          type="button"
          className="btn  add_contact_btn"
          onClick={() => {
            navigate("/add-contact");
          }}
        >
          Add Contact
        </button>
      </div>
      {contactsList?.length ? (
        <div className="m-auto" style={{ width: "80vw" }}>
          <ContactTable handleDelete={handleDelete} contact={contactsList} handleUpdate={handleUpdate} />
        </div>
      ) : (
          <div className="text-center text_name">No contacts Found Kindly Add</div>
      )}
    </ContactPage>
  );
}
 
export default ContactList
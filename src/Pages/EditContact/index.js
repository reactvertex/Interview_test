import React from "react";
import { useParams,useLocation } from "react-router-dom";
import ContactForm from '../../Components/ContactForm';

function EditContact(props) {
  let params = useParams();
  let location = useLocation();


  return <ContactForm editable={true} id={location.state.id} userDetails={location.state.data} />;
}
export default EditContact;

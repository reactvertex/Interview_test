import React from 'react';
import ContactTable from './ContactTable';
import { useNavigate } from 'react-router-dom';
import { ContactPage } from './styleComponents';

export default function ContactList({ contacts }) {
    let navigate = useNavigate();

    return (
        <ContactPage>
            <div className='d-flex justify-content-between mx-5 align-items-center'>
                <div>Contact List</div>
                <button type="button" className="btn btn-outline-secondary add_contact_btn" onClick={() => { navigate("/add-contact") }}>Add Contact</button>
            </div>
            <div className='m-auto' style={{ width: '80vw' }}>
                <ContactTable contact={JSON.parse(contacts)} />
            </div>
        </ContactPage>
    );
}

function ContactCard(props) {
    return (
        <div>
            <span>Name: {props.name}</span>
            <span>Phone: {props.phone}</span>
            <span>Type: {props.type}</span>
            <span>Whatsapp Available: {props.isWhatsapp ? "Yes" : "No"}</span>
            <image src={props.image}></image>
        </div>
    )
}
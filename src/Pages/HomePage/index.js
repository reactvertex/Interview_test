import React, { useEffect, useState } from 'react';
import ContactList from '../../Components/ContactList';


function Home() {
    const [contactsList, setContactsList] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("contacts")) {
            setContactsList(localStorage.getItem("contacts"));
        };
    }, []);

    return (
        <div>
            {contactsList ? <ContactList contacts={contactsList} /> : <><h1>No contacts Found Kindly Add</h1></>}
        </div>
    );
}

export default Home




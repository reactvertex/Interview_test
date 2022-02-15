import React, { useEffect, useState } from 'react';
import ContactList from '../../Components/ContactList';
import { db } from "../../firebaseConfig";


function Home() {
  

    return (
        <div>
             <ContactList   />
        </div>
    );
}

export default Home




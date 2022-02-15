

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.Api_Key,
  authDomain: process.env.Auth_Domain,
  projectId: process.env.Project_Id,
  storageBucket: process.env.Storage_Bucket,
  messagingSenderId: process.env.Messaging_SenderId,
  appId: process.env.App_Id,
};

const app = initializeApp(firebaseConfig);

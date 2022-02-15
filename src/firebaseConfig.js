// import 'firebase/auth'
// import 'firebase/firestore'
// import 'firebase/storage'
// import { firebase } from '@firebase/app';

//     const firebaseConfig = {
//         apiKey: "AIzaSyBggkoiAvwGS8QanXYOKuT9v3Vq5cLOxA0",
//         authDomain: "demotest-f35e0.firebaseapp.com",
//         projectId: "demotest-f35e0",
//         storageBucket: "demotest-f35e0.appspot.com",
//         messagingSenderId: "520307464494",
//         appId: "1:520307464494:web:eae72949c5d2ec985e42bf"
//     }
//     firebase.initializeApp(firebaseConfig)

// const storage = firebase.storage()
// const db = firebase.firestore()
// const auth = firebase.auth()

// export {
//     storage,
//     db,
//     auth,
// }

import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLHYr4zVrTW3HDQD2LCN_e62gVKm7cH1w",
  authDomain: "industest-354f3.firebaseapp.com",
  projectId: "industest-354f3",
  storageBucket: "industest-354f3.appspot.com",
  messagingSenderId: "446491001775",
  appId: "1:446491001775:web:aa600c68f235e95dbee55a",
};

const app = initializeApp(firebaseConfig);

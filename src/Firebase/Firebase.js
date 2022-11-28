// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNgyHkgm4E3QVlRv5ll6ryO_Dgp_CVFLI",
  authDomain: "fec-diary.firebaseapp.com",
  projectId: "fec-diary",
  storageBucket: "fec-diary.appspot.com",
  messagingSenderId: "269310317288",
  appId: "1:269310317288:web:f5f8cbeab1b99459086f5d"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


// export const ragister = (email,password)=>{
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     return user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode,errorMessage)
//     // ..
//   });
// }
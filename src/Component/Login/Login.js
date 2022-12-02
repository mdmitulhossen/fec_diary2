import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./login.css";
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../../Firebase/Firebase';
// import signIn from '../Register/Register';



const Login = () => {
  
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [student, setStudent] = useState(true);
    const [teacher, setTeacher] = useState(false);
    const [stuFocus, setstuFocus] = useState("loginFocus");
    const [teachFocus, setteachFocus] = useState('');
    const [studentTeacher, setstudentTeacher] = useState("STUDENT");
    const [teacherEmail, setTeacherEmail] = useState("");
    const [teacherPasssword, setTeacherPassword] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const handleStudent = () => {
        console.log("clicked")
        setStudent(true);
        setTeacher(false);
        setstudentTeacher("STUDENT");
        setstuFocus("loginFocus");
        setteachFocus("");
    }
    const handleTeacher = () => {
        setStudent(false);
        setTeacher(true);
        setstudentTeacher("TEACHER");
        setstuFocus("");
        setteachFocus("loginFocus");
    }

//sign in with email passsword
   
const handleLogIn = async()=>{
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user){
            alert("You Are LogIn " + user.displayName);
           navigate('/');
        
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
}

//signIn with google
const handleSignInGoogle= async()=>{
    await signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      if(user){
        navigate('/');
      }
      
      // ...
    }).catch((error) => {
      // Handle Errors here.
    //   const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // The email of the user's account used.
    //   const email = error.customData.email;
      // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

//teacherlogin
const teacherLogin=async()=>{
    // console.log("click")
    // signIn(teacherEmail,teacherPasssword)
    await signInWithEmailAndPassword(auth, teacherEmail, teacherPasssword)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if(user){
            alert("You Are LogIn " + user.displayName);
           navigate('/');
        
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
}

    return (
        <div className='login mt-4'>
            <section className="vh-75 gradient-custom">
                <div className="container py-2 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card  text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-2 text-center">

                                    {/* <div className="mb-md-2 mt-md-2 pb-1"> */}

                                    <h2 className="fw-bold mb-2 text-uppercase">{studentTeacher}   Login</h2>
                                    <p className="text-white-50 mb-4">Please enter your login and password!</p>
                                    <div className='mb-5'>

                                        <button className={`btn ${stuFocus} btn-outline-light mx-2 px-5`} type="submit" onClick={handleStudent}>Student</button>
                                        <button className={`btn ${teachFocus}  btn-outline-light px-5`} type="submit" onClick={handleTeacher}>Teacher</button>

                                    </div>
                                    {
                                        student ? <div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="email" id="typeEmailX" className="form-control " onChange={(e)=>{setEmail(e.target.value)}}/>
                                                <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="password" id="typePasswordX" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} />
                                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            </div>

                                            <p className="small mb-2 pb-lg-1"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                            <button className="btn btn-outline-light px-5" type="submit" onClick={handleLogIn}>Login</button>
                                             
                                             <p className='mt-4'>---------OR SignIn With--------</p>
                                            <div className="d-flex justify-content-center text-center  pt-1 mb-4">
                                                {/* <Link to="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></Link>
                                                <Link to="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></Link> */}
                                                <Link to="#!" onClick={handleSignInGoogle} className="text-white"><i className="fab fa-google fa-lg"></i></Link>
                                            </div>
                                            <div>
                                                <p className="mb-3">Don't have an account? <Link to="/register" className="text-white-50 fw-bold">Sign Up</Link>
                                                </p>
                                            </div>
                                        </div> 
                                        : 
                                        <div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="email" onChange={(e)=>setTeacherEmail(e.target.value)} id="typeEmailX" className="form-control " />
                                                <label className="form-label" htmlFor="typeEmailX">Email</label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="password" onChange={(e)=>setTeacherPassword(e.target.value)} id="typePasswordX" className="form-control" />
                                                <label className="form-label" htmlFor="typePasswordX">Password</label>
                                            </div>

                                            <p className="small mb-2 pb-lg-1"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                            <button className="btn btn-outline-light mb-4 px-5" type="submit" onClick={teacherLogin}>Login</button>

                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
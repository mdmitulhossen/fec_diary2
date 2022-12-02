import React, { useState } from 'react';
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./../../Firebase/Firebase";


const Register = () => {
	const navigate=useNavigate();
	const [name,setName]=useState('');
	const [contactNo,setContactNo]=useState('');
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [user,setUser]=useState('');

	//Register
	const handleRagister = async()=>{
        //   const user = await ragister(email,password);
		//   console.log(user);
		try{
			await createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
				const user = userCredential.user;
				console.log(user);
				updateprofile(name);
				if(user){
					navigate('/signIn');
				}
			})
			// const user = await ragister(email,password);
			// console.log(user);
			alert("register successfull");
			
		}catch(error){
              console.log(error.massage);
		}
	}

	//update profile
		const updateprofile = async(name)=>{
			await updateProfile(auth.currentUser,{
				displayName:name
			 }).then(()=>console.log("profile updated" + auth.currentUser.displayName))
		}
	 
	
    return (
        <div className='RegBody'>
            
		<h1 className='d-flex justify-content-center mb-5 mt-4 fw-bold'>REGISTER</h1>
		<p className='CreateText'>Please fill in this htmlForm to create an account.</p>
		
		
		<label htmlFor="name"><b>Name</b></label>
		<input type="text" className='text' placeholder="Enter Your Name" name="name" onChange={(e)=>setName(e.target.value)} required /><br/>
		
		<label htmlFor="number"><b>Contact No.</b></label>
		<input type="number" className='text' placeholder="Enter Your Contact No." onChange={(e)=>setContactNo(e.target.value)} name="number" required/><br/>
		
		<label htmlFor="email"><b>Email</b></label> 
		<input type="email" className='text' placeholder="Enter Your E-mail" name="email" onChange={(e)=>setEmail(e.target.value)} required/><br/>

		<label htmlFor="pwd"><b>Password</b></label>
		<input type="password" className='password' placeholder="Enter Your Password" name="psw" onChange={(e)=>setPassword(e.target.value)}  required/><br/>

		<label htmlFor="psw-repeat"><b>Repeat Password</b></label>
		<input type="password" className='password' placeholder="Repeat Your Password" name="psw-repeat" required/><br/>
		<hr/>
		<p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>

		<button type="submit" className="registerbutton" onClick={handleRagister}>Register</button>
		
		<p className='mb-5 mt-2'>Already have an account? <Link to="/signIn">Sign in</Link>.</p>
		
        </div>
    );
};

export default Register;
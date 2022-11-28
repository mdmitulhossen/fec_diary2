import React from 'react';
import "./Register.css"
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className='RegBody'>
            
		<h1 className='d-flex justify-content-center mb-5 mt-4 fw-bold'>REGISTER</h1>
		<p className='CreateText'>Please fill in this htmlForm to create an account.</p>
		
		
		<label htmlFor="name"><b>Name</b></label>
		<input type="text" className='text' placeholder="Enter Your Name" name="name" required /><br/>
		
		<label htmlFor="number"><b>Contact No.</b></label>
		<input type="text" className='text' placeholder="Enter Your Contact No." name="number" required/><br/>
		
		<label htmlFor="email"><b>Email</b></label> 
		<input type="email" className='text' placeholder="Enter Your E-mail" name="email" required/><br/>

		<label htmlFor="pwd"><b>Password</b></label>
		<input type="password" className='password' placeholder="Enter Your Password" name="psw" required/><br/>

		<label htmlFor="psw-repeat"><b>Repeat Password</b></label>
		<input type="password" className='password' placeholder="Repeat Your Password" name="psw-repeat" required/><br/>
		<hr/>
		<p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>

		<button type="submit" class="registerbutton">Register</button>
		
		<p className='mb-5 mt-2'>Already have an account? <Link to="#">Sign in</Link>.</p>
		
        </div>
    );
};

export default Register;
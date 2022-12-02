import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import "./TopNav.css";


const TopNav = () => {
    const [name, setName] = useState("")
    const auth = getAuth();
    //stateShow
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
            console.log(user.displayName);
            setName(user?.displayName)
            // ...
        } else {
            setName("")
        }
    });

    //signOut
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            setName("");
            alert("log out successfully")
          }).catch((error) => {
            // An error happened.
            console.log(error.massage)
          });
        
    }
   

    return (
        <div>
            <div className='topNav'>
                <div className="contain  mt-2">
                    {/* <!-- Left links --> */}
                    <div>
                        {
                            name ? <Link to="/"> <button onClick={handleSignOut} type="button" className="btn login_btn px-3 me-4">
                                Login Out
                            </button></Link> : <Link to="/signIn"> <button type="button" className="btn login_btn px-3 me-4">
                                SignIn
                            </button></Link>
                        }
                        {/* <Link to="/signIn"> <button type="button" className="btn login_btn px-3 me-4">
                            Login
                        </button></Link> */}
                        {
                            name ? <Link to="/register"><button type="button" className="btn btn-primary me-4">
                                {name}
                            </button></Link> : <Link to="/register"><button type="button" className="btn btn-primary me-4">
                                Sign up
                            </button></Link>
                        }
                        {/* <Link to="/register"><button type="button" className="btn btn-primary me-4">
                            Sign up
                        </button></Link> */}
                        <Link
                            className="btn btn-dark px-3"
                            to="https://github.com/mdbootstrap/mdb-ui-kit"
                            role="button"
                        ><i className="fab fa-github"></i
                        ></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TopNav;
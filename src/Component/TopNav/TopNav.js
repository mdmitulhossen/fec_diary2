import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Firebase';
import "./TopNav.css";

const TopNav = () => {
    
    return (
        <div>
            <div className='topNav'>
                <div className="contain  mt-2">
                    {/* <!-- Left links --> */}
                    <div>
                        <Link to="/signIn"> <button type="button" className="btn login_btn px-3 me-4">
                            Login
                        </button></Link>
                        <Link to="/register"><button type="button" className="btn btn-primary me-4">
                            Sign up
                        </button></Link>
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
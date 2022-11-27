import React from 'react';
import { Link } from 'react-router-dom';
import "./TopNav.css"

const TopNav = () => {
    return (
        <div className='topNav mt-3'>
            <div className="container">
                {/* <!-- Left links --> */}
                <div className="d-flex align-items-center login">
                    <button type="button" className="btn login_btn px-3 me-4">
                        Login
                    </button>
                    <button type="button" className="btn btn-primary me-4">
                        Sign up for free
                    </button>
                    <Link
                        className="btn btn-dark px-3"
                        to="https://github.com/mdbootstrap/mdb-ui-kit"
                        role="button"
                    ><i className="fab fa-github"></i
                    ></Link>
                </div>
            </div>
        </div>
    );
};

export default TopNav;
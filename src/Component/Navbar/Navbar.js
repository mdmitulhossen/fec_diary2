import React from 'react';
import SideNav from '../SideNav/SideNav';
import TopNav from '../TopNav/TopNav';

const Navbar = () => {
    return (
        <div className='d-flex' style={{background:"#edeef3"}}>
            <SideNav/>
            <TopNav/>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import TopNav from '../TopNav/TopNav';
import './homepage.css'


const HomePage = () => {
    return (
        <div className='home d-flex flex-column'>
            <nav className='nav'><TopNav/></nav>
            <div className='route'>
                <Routes>
                    <Route path='/signIn' element={<Login/>} />
                </Routes>
                
            </div>
        </div>
    );
};

export default HomePage;
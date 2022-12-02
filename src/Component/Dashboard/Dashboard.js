import React from 'react';
import DashBoardCard from '../DashboardCard/DashBoardCard';
import "./dashboard.css"

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='dashboardTop  px-3 pt-2 pb-2'>
               <h5>DASHBOARD</h5> 
               <p >FEC Diary</p>
            </div>
            
            <div className='dash mt-4'>
                <DashBoardCard/>
                <DashBoardCard/>
                <DashBoardCard/>
                <DashBoardCard/>

            </div>
            
               
            <div className='d-flex justify-content-center mb-5 mt-4'>
            <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.201203852467!2d89.85262341490164!3d23.597115984665173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe2535f9df3a73%3A0x820055c30208a76c!2sFaridpur%20Engineering%20College!5e0!3m2!1sen!2sbd!4v1669959066852!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Dashboard;
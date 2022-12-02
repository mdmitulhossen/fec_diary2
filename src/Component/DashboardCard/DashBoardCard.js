import React from 'react';
import "./dashBoardCard.css"

const DashBoardCard = () => {
    return (
        <div className='mx-3'>
            <div className='d-flex dashCard'>
                <div className='d-flex justify-content-center align-items-center cardIcon'><i className="fa-solid fa-people-group mt-1 item-i"/></div>
                <div className='mx-4'>
                  <h2>5121</h2>
                  <h6>Student</h6>
                </div>
            </div>
        </div>
    );
};

export default DashBoardCard;
import React from 'react';
import "./dashBoardCard.css"

const DashBoardCard = ({card,icon}) => {
    return (
        <div className='mx-3'>
            <div className='d-flex dashCard'>
                <div className='d-flex justify-content-center align-items-center cardIcon'>{icon}</div>
                <div className='mx-4'>
                  <h2>5121</h2>
                  <h6>{card}</h6>
                </div>
            </div>
        </div>
    );
};

export default DashBoardCard;
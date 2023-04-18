import React from 'react';
import QZone1 from '../../assets/qZone1.png'
import QZone2 from '../../assets/qZone2.png'
import QZone3 from '../../assets/qZone3.png'
const QZone = () => {
    return (
        <div>
            <div className='bg-secondary bg-opacity-50 text-center my-4 py-4'>
                <h4>Q-Zone</h4>
                <div>
                    <img src={QZone1} alt="" />
                    <img src={QZone2} alt="" />
                    <img src={QZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QZone;
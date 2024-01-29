import React from 'react';
import './Slip.css';

function Slip() {
    return (
        <>
         
            <div id="Reciept">
                <span id="Original">Original Slip</span>
                <span className="Progress">In Progress</span>
            </div>
            <div className="AckSlip">
                <span className="Ackslip">Ack Slip</span>
            </div>

            <div className='Action'>
                <h3>Action</h3> <span>
                    <i class="ri-edit-2-fill pencil"></i>
                </span>
            </div>
         
        </>
    );
}

export default Slip;

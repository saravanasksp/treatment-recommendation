import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom'; 
import 'react-datepicker/dist/react-datepicker.css';
const Result = () => {
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();
    const gotoHome = () => {
        navigate('/')
    }
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div style={{ padding: '20px' }} className='datetimesection'>
                            <h2>Select a Date and Time</h2>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                showTimeSelect
                                dateFormat="Pp"
                            />
                            <div style={{ marginTop: '10px' }}>
                                <p>Selected Date and Time: {startDate.toString()}</p>
                            </div>
                            <div className='text-center d-flex'>
                                <button className='btn btn-primary bg-agnes w-50 py-2 me-2' data-bs-toggle="modal" data-bs-target="#successmodal">Proceed</button>
                                <button className='btn btn-secondary w-50 py-2'  onClick={gotoHome}>Back to Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade successmodal modal-lg" id="successmodal" tabIndex="-1" aria-labelledby="successmodal" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered">
                    <div className="modal-content">
                        <button type="button" className="btn-times" data-bs-dismiss="modal" aria-label="Close">&times;</button>
                    <div className="modal-body">
                        <h3>Thank You!</h3>
                        <p>Your Appointment Successful!</p>
                        <p>You booked an appointment with Dr. John Smith on <span className='text-agnes'>{startDate.toString()}</span> </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result
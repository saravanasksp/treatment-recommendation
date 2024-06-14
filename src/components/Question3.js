//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';                                                                                                                            
import finddoc from '../dental-specialist.png'
const Question2 = () => {
    const navigate = useNavigate();
    const gotoResult = () => {
        navigate('/result');
    };
    return (
        <div>
            <div className="container my-3 myquethree">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2 className="text-center">Find doctors</h2>
                        <div className="finddocsec mb-3">
                            <div className="d-flex">
                                <img src={finddoc} alt='finddoc' className='img-fluid'/>
                                <div className='ml-auto content'>
                                    <h4>Dr. John Smith</h4>
                                    <small>Root Canal Specialist</small>
                                    <p>5 Years experience</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='bookslot'>
                                    <p>Next Available</p>
                                    <small>10:00 AM tomorrow</small>
                                </div>
                                <div className='ms-auto bookcontent'>
                                    <button className="btn btn-primary bg-agnes" onClick={gotoResult}>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="finddocsec mb-3">
                            <div className="d-flex">
                                <img src={finddoc} alt='finddoc' className='img-fluid'/>
                                <div className='ml-auto content'>
                                    <h4>Dr. John Smith</h4>
                                    <small>General Dentist</small>
                                    <p>5 Years experience</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='bookslot'>
                                    <p>Next Available</p>
                                    <small>10:00 AM tomorrow</small>
                                </div>
                                <div className='ms-auto bookcontent'>
                                    <button className="btn btn-primary bg-agnes" onClick={gotoResult}>Book Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="finddocsec mb-2">
                            <div className="d-flex">
                                <img src={finddoc} alt='finddoc' className='img-fluid'/>
                                <div className='ml-auto content'>
                                    <h4>Dr. John Smith</h4>
                                    <small>Orthodontist</small>
                                    <p>5 Years experience</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className='bookslot'>
                                    <p>Next Available</p>
                                    <small>10:00 AM tomorrow</small>
                                </div>
                                <div className='ms-auto bookcontent'>
                                    <button className="btn btn-primary bg-agnes" onClick={gotoResult}>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question2
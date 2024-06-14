//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch} from '@fortawesome/free-solid-svg-icons'
const Question2 = () => {
    const navigate = useNavigate();
    const gotoPagethree = () => {
        navigate('/question3');
    };
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                       <h2 className="text-center">Pick your Services</h2>
                       <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Root canal treatment
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Dental implant
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Dental restoration
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Dentures
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Veneer
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Periodontics
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Crown
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Oral and maxillofacial surgery
                            </label>
                        </div>
                        <button className='btn btn-primary bg-agnes btn-next' onClick={gotoPagethree}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question2
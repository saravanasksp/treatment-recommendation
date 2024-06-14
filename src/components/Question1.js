//import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
const Question1 = () => {
   /* const [answer, setAnswer] = useState('');
    const handleChange = (event) => {
        setAnswer(event.target.value);
    };*/
    const navigate = useNavigate();
    const gotoPagetwo = () => {
        navigate('/question2');
        //state: { previousAnswers: { question1: answer } }
    };
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2 className="text-center">Choose your Specialist</h2>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon className="fw-bold" icon={faSearch} /></span>
                            <input type="text" className="form-control py-3 shadow-none" placeholder="Search doctor, medicines etc" />
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Diagnostic
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"  checked/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Dental
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Medicines
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Surgeon
                            </label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Eye
                            </label>
                        </div>
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Heart
                            </label>
                        </div>
                        <button className='btn btn-primary bg-agnes btn-next' onClick={gotoPagetwo}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question1
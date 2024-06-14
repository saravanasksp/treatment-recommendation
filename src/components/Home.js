// import bannerimg from '../treatment-hcp.jpg'
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    const goToQue = () => {
        navigate('/question1');
    };
    return (
        <div className="container">
            <div className="col-md-5 mx-auto my-3">
                <h1>Hello there!</h1>
                <p>Nice to meet you!</p>
                <p>We love to know you better. Please login to proceed</p>
                <div className='card'>
                    <div className='card-body'>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>                        
                        <button onClick={goToQue} className="btn btn-primary btn-agnes d-block w-100 mb-2">Let's get started</button>
                        <a href='/
                        ' className='lb text-decoration-none'>Forgot password?</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Home;
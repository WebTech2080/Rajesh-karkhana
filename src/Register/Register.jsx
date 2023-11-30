import React from 'react'
import './register.scss'

function Register() {
    return (
        <>
            <div className="register">
                <div className="container">
                    <div className="register-body">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="register-body-img ">
                                    <img className='w-100 rounded-start-4' src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/h4-img-1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="register-body-info d-flex align-items-center rounded-end-4">
                                    <div className="form">
                                        <div className="form-heading">
                                        <h4>Welcome to Company!</h4>
                                        <h6>Register your account</h6>
                                        </div>
                                        <input className='w-100' type="text" placeholder='First Name*' />
                                        <input className='w-100' type="text" placeholder='Last Name*' />
                                        <input className='w-100' type="number" placeholder='Phone Number*' />
                                        <input className='w-100' type="password" placeholder='Password*' />
                                        <input className='w-100' type="password" placeholder='Confirm Password*' />
                                        <button className='form-btn btn btn-primary w-100'>Register <span><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span></button>
                                        <p className='mt-4'>Already have an account? <span><strong>Sign in</strong></span></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register
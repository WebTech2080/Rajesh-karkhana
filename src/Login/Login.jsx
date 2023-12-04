import React from 'react'
import './login.scss'

function Login() {
    return (
        <>
            <div className="login">
                <div className="container">
                    <div className="login-body">
                        <div className="row">
                            <div className="col-md-6 p-0">
                                <div className="login-body-img">
                                    <img className='w-100 rounded-start-4' src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/h4-img-6.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="login-body-form d-flex align-items-center rounded-end-4">
                                    <div className="form">
                                        <h3 className='mb-4 text-center'>Sign in to Account</h3>
                                        <input type="number" placeholder='Phone Number*' />
                                        <input type="password" placeholder='Password*' />
                                        <button className='form-btn btn btn-primary w-100'>Login <span><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span></button>
                                        <p className='mt-4'>Don't have an account? <span><strong>Sign up</strong></span></p>
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

export default Login
import React from 'react'
import './about.scss'

function About() {
    return (
        <>
            <div className="about my-5">
                <div className="container">
                    <div className="about-header text-center">
                        <h1 className='m-0 '>About <span>Us</span></h1>
                    </div>
                </div>
                <div className="about-banner">
                    <img className='w-100' src="https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/About-title-img.jpg" alt="" />
                </div>
                <div className="container">
                    <div className="about-policy ">
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="about-policy-top d-flex align-items-center my-2">
                                    <div className="about-policy-top-icon">
                                        <h4><i class="fa fa-shopping-cart me-4" aria-hidden="true"></i></h4>
                                    </div>
                                    <div className="about-policy-top-header">
                                        <h4>Shop Online</h4>
                                    </div>
                                </div>
                                <div className="about-policy-bottom">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eveniet ipsa asperiores explicabo.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-policy-top d-flex align-items-center my-2">
                                    <div className="about-policy-top-icon">
                                        <h4><i class="fa fa-inr me-4" aria-hidden="true"></i></h4>
                                    </div>
                                    <div className="about-policy-top-header">
                                        <h4>Free Shipping</h4>
                                    </div>
                                </div>
                                <div className="about-policy-bottom">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eveniet ipsa asperiores explicabo.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-policy-top d-flex align-items-center my-2">
                                    <div className="about-policy-top-icon">
                                        <h4><i class="fa fa-clock-o me-4" aria-hidden="true"></i></h4>
                                    </div>
                                    <div className="about-policy-top-header">
                                        <h4>Return Policy</h4>
                                    </div>
                                </div>
                                <div className="about-policy-bottom">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eveniet ipsa asperiores explicabo.</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="about-policy-top d-flex align-items-center my-2">
                                    <div className="about-policy-top-icon">
                                        <h4><i class="fa fa-credit-card-alt me-4" aria-hidden="true"></i></h4>
                                    </div>
                                    <div className="about-policy-top-header">
                                        <h4>Payment</h4>
                                    </div>
                                </div>
                                <div className="about-policy-bottom">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas eveniet ipsa asperiores explicabo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-store">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="about-store-header">
                                    <h2>ABOUT STORE</h2>
                                </div>
                                <div className="about-store-text">
                                    <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit minus deleniti.</p>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto corrupti eum veritatis qui modi. Blanditiis veniam fuga inventore ipsum aperiam.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='w-100' src="https://tobel.qodeinteractive.com/wp-content/uploads/2021/04/home-3-port-4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-suggestion">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="about-suggestion-card">
                                    <div className="suggestion-card-img">
                                        <img className='w-100' src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/about-us-blog-img-1.jpg" alt="" />
                                    </div>
                                    <div className="about-suggestion-card-text text-center py-3">
                                        <p>May 21, 2018 </p>
                                        <h5 className='my-2'>Get the vintage look with a modern twist </h5>
                                        <p><strong>Read More</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-suggestion-card">
                                    <div className="suggestion-card-img">
                                        <img className='w-100' src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/about-us-blog-img-2.jpg" alt="" />
                                    </div>
                                    <div className="about-suggestion-card-text text-center py-3">
                                        <p>May 21, 2018 </p>
                                        <h5 className='my-2'>Get the vintage look with a modern twist </h5>
                                        <p><strong>Read More</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="about-suggestion-card">
                                    <div className="suggestion-card-img">
                                        <img className='w-100' src="https://arredo.qodeinteractive.com/wp-content/uploads/2018/05/about-us-blog-img-3.jpg" alt="" />
                                    </div>
                                    <div className="about-suggestion-card-text text-center py-3">
                                        <p>May 21, 2018 </p>
                                        <h5 className='my-2'>Get the vintage look with a modern twist </h5>
                                        <p><strong>Read More</strong></p>
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

export default About
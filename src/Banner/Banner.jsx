import React from 'react'
import './banner.scss'
import { Routes, Route, Link } from "react-router-dom";

function Banner() {
    return (
        <>
            <div className="banner">
                < div className="header-bottom" >
                    <div className="nav  d-flex justify-content-between align-items-center  py-2 px-3">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid p-0">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item ms-0">
                                        {/* <LinkContainer to="/"><Nav.Link>HOME</Nav.Link></LinkContainer> */}
                                        <a className="nav-link " href="#">HOME</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">GALLERY</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">PRODUCTS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link " href="#">ABOUT US</a>
                                        </li>
                                        <li className="nav-item me-0">
                                            <a className="nav-link " href="#">CONTACT US</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>

                        <div className="social-icons">
                            <ul className='d-flex'>
                                <li className='mx-2'><i class="fa fa-facebook" aria-hidden="true"></i></li>
                                <li className='mx-2'><i class="fa fa-instagram" aria-hidden="true"></i></li>
                                <li className='mx-2'><i class="fa fa-twitter" aria-hidden="true"></i></li>
                                <li className='ms-2'><i class="fa fa-google-plus" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                    </div>
                </div >
            </div>
            {/* <Routes>
                <Route path="/" element={<Home />} />
            </Routes> */}
        </>
    )
}

export default Banner
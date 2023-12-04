import React from 'react'
import './blog2.scss'

function Blog2() {
    return (
        <>
            <div className="blog2 py-5">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-md-8">
                            <div className="blog2-left">
                                <div className="blog2-left-img">
                                    <img className='w-100' src="https://html.matethemes.com/venturi/venturi/assets/images/blog/blog-lg-1.jpg" alt="" />

                                </div>
                                <p className='mt-4 mb-3'>December 01, 2022 </p>
                                <h2 className='mb-5'>Praesent sapien massa convallis a pellentesque</h2>
                                <p className='mb-3'>Donec rutrum congue leo eget malesuada. Curabitur aliquet quam posuere blandit. Vivamus suscipit tortor eget felis porttitor
                                    volutpa estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque, auctor sit
                                    amet aliquam vel, ullamcorper sit amet ligula.</p>
                                <p className='mb-3'>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque
                                    velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet
                                    nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus Vestibulum ante ipsum primis in faucibus
                                    orci luctus ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam ullamcorper sit amet ligula.
                                    Quisque velit , pretium ut lacinia in, elementum id enim.</p>
                                <h3 className='my-5'><strong>“Cras ultricies ligula sed magna dictum porta aesent sapien massa convallis a pellentesque nec, egestas vamus magna justo ”</strong></h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img className='w-100' src="https://html.matethemes.com/venturi/venturi/assets/images/blog/blog-4.jpg" alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <img className='w-100' src="https://html.matethemes.com/venturi/venturi/assets/images/blog/blog-5.jpg" alt="" />
                                    </div>
                                </div>
                                <p className='my-4'>Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                    ullamcorper sit amet ligula. Quisque velit , pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis
                                    porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada
                                    urabitur non nulla sit amet nisl tempus</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog2-right">
                                <div className="blog2-right-category">
                                    <h2 className='mb-3'>Categories</h2>
                                    <ul>
                                        <li><p>CHAIRS</p></li>
                                        <li><p>TABLES</p></li>
                                        <li><p>SOFAS</p></li>
                                        <li><p>BENCHES</p></li>
                                        <li><p>BEDS</p></li>
                                        <li><p>COFFEE TABLES</p></li>

                                    </ul>

                                </div>
                                <div className="blog2-right-posts mb-4">
                                    <h2 className='mb-4'>Popular Posts</h2>
                                    <div className="row align-items-center g-4">
                                        <div className="col-md-4">
                                            <img className='w-100' src="https://umea.qodeinteractive.com/wp-content/uploads/2020/12/blog-img-4-650x650.jpg" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <h6>Handmade pieces that took time to make </h6>
                                        </div>
                                        <div className="col-md-4">
                                            <img className='w-100' src="https://umea.qodeinteractive.com/wp-content/uploads/2020/12/blog-img-5-650x650.jpg" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <h6>Get ideas about effective home office furniture  </h6>
                                        </div>
                                        <div className="col-md-4">
                                            <img className='w-100' src="https://umea.qodeinteractive.com/wp-content/uploads/2020/12/blog-img-6-650x650.jpg" alt="" />
                                        </div>
                                        <div className="col-md-8">
                                            <h6>How to arrange lights in your studio </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog2-right-follow mb-3">
                                    <h2 className='mb-3'>Follow Us</h2>
                                    <div className="follow-list">
                                    <p>INSTAGRAM</p>
                                    </div>
                                    <div className="follow-list">
                                    <p>FACEBOOK</p>
                                    </div>
                                    <div className="follow-list">
                                    <p>TWITTER</p>
                                    </div>
                                </div>
                                <div className="blog2-right-author">
                                    <h2 className='mb-4'>About Owner</h2>
                                    <div className="author-img">
                                        <img className='w-100' src="https://umea.qodeinteractive.com/wp-content/uploads/2020/12/blog-sidebar-img-300x217.jpg" alt="" />
                                    </div>
                                    <div className="author-desc">
                                        <p className='mt-3'>Owner (Company Name)</p>
                                        <h5 className='mb-3 mt-2'>Binod Chaudhary</h5>
                                        <p className='text-start'>Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Libero nunc consequat interdum.</p>
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

export default Blog2
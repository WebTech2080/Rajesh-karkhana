import React from 'react'
import './blog.scss'

function Blog() {
    return (
        <>
            <div className="blog my-5">
            <div className="blog-header text-center py-5">
                        <h3>Our Blog</h3>
                    </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="blog-left">
                                <img className='w-100' src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2022/10/blog-1-1174x862.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <div className="blog-mid">
                                <div className="blog-mid-text px-2">
                                    <h6>FURNITURE, TABLE</h6>
                                    <h3 className='py-3'>The Secrets to a Living Room that Draws You In</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Odit officiis itaque laudantium cum atque?</p>
                                    <h6 className='mt-3'>Read More</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="blog-right">
                                <img className='w-100' src="https://nooni-be87.kxcdn.com/nooni/wp-content/uploads/2022/10/blog-2-1174x862.jpg" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog
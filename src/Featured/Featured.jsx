import React from 'react'
import './featured.scss'

function Featured() {
    return (
        <>
            <div className="featured my-5">
                <div className="container">
                    <div className="featured-header py-4 text-center">
                        <h2>Featured <span>Products</span></h2>
                    </div>
                    <div className="featured-items pt-4">
                        <div className="featured-items-card">
                            <div className="owl-carousel">
                                <div className="item">
                                    <div className="featured-items-card-img">
                                        <img className='w-100' src="https://decorazzio.cmsmasters.net/wp-content/uploads/2015/05/shop_22-1.jpg" alt="" />
                                    </div>
                                    <div className="featured-items-card-text">
                                        <h5></h5>
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

export default Featured
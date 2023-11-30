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
                                <div className="item"><h1>hellooo</h1></div>
                                <div className="item"><h1>hellooo</h1></div>
                                <div className="item"><h1>hellooo</h1></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Featured
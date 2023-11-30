import React from 'react'
import './gallery.scss'

function Gallery() {
  return (
    <>
    <div>
  <div className="container">
    <h1>Gallery</h1>
    <div className="gallery-wrap">
      <div className="item item-1" />
      <div className="item item-2" />
      <div className="item item-3" />
      <div className="item item-4" />
      <div className="item item-5" />
    </div>
  </div>
  <div className="social">
    <a href="https://twitter.com/StefCharle" target="_blank">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/149103/twitter.svg" alt />
    </a>
  </div>
</div>

    </>
  )
}

export default Gallery
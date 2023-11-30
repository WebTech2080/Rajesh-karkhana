import React from 'react'
import './header.scss'

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-top d-flex justify-content-between align-items-center py-2 px-3">
          <div className="header-top-left">
            <div className="logo">
              <img className='w-100' src="https://klbtheme.com/furnob/intro/assets/img/logo-dark.png" alt="" />
            </div>
          </div>
          <div className="header-top-right">
            <div className="header-contact text-start d-flex align-items-center">
              <h5 className='m-0 px-3'><i class="fa fa-phone" aria-hidden="true"></i>
                <span> 1-888-817-1234</span></h5>
              <div className="header-contact-btn btn btn-primary border-0 rounded-0">
                Contact Us
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}
export default Header



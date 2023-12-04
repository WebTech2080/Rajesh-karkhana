import React from 'react'
import './contact.scss'

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-header text-center py-5">
          <h2>Contact Us</h2>
        </div>
        <div className="container">
          <div className="contact-body">
            <div className="row">
              <div className="col-md-5">
                <div className="contact-body-left">
                  <div className="contact-body-left-header pb-5">
                    <h3>Contact Info</h3>
                  </div>
                  <ul>
                    <li><i class="fa fa-map-marker pe-3" aria-hidden="true"></i> <span> Battisputali, Kathmandu</span></li>
                    <li><i class="fa fa-volume-control-phone pe-3" aria-hidden="true"></i> <span>  1-888-817-1234 / 1800-222-7560 </span></li>
                    <li><i class="fa fa-envelope-o pe-3" aria-hidden="true"></i> <span> example@gmail.com</span></li>
                    <li><i class="fa fa-clock-o pe-3" aria-hidden="true"></i> <span> 10:00AM – 6:00PM, Sunday Close </span></li>
                  </ul>
                  <ul className='d-flex'>
                    <li><i class="fa fa-facebook pe-3" aria-hidden="true"></i></li>
                    <li><i class="fa fa-instagram px-3" aria-hidden="true"></i></li>
                    <li><i class="fa fa-twitter px-3" aria-hidden="true"></i></li>
                    <li><i class="fa fa-google px-3" aria-hidden="true"></i></li>
                  </ul>

                </div>
              </div>
              <div className="col-md-7">
                <div className="contact-body-right">
                  <input type="text" placeholder='Your Name*' />
                  <input type="text" placeholder='Email*' />
                  <input type="text" placeholder='Subject*' />
                  <textarea name="message" id="" cols="30" rows="5" placeholder='Your Message*'></textarea>
                  <button className=" btn btn-primary rounded-0" type="submit">Submit</button>


                </div>
              </div>
            </div>
          </div>
          <div className="contact-map">
          <div className="mapouter"><div className="gmap_canvas"><iframe src="https://maps.google.com/maps?q=Old%20baneshwor&t=&z=19&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" style={{ width: 1080, height: 400 }} /><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;height:400px;width:1080px;background:#fff;} .maprouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}" }} /><a href="https://blooketjoin.org">blooketjoin</a><style dangerouslySetInnerHTML={{ __html: ".gmap_canvas{overflow:hidden;height:400px;width:1080px}.gmap_canvas iframe{position:relative;z-index:2}" }} /></div></div>            </div>

        </div>
      </div>
    </>
  )
}

export default Contact
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
<iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14130.948231973627!2d85.34462205!3d27.694520599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1701326295712!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

        </div>
      </div>
    </>
  )
}

export default Contact
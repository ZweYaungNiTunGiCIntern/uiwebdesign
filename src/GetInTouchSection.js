import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
export default function GetInTouchSection() {
  return (
    <div className="container mt-5 mb-5 color1">
        <div className="row mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <div className="col-12 text-center">
                <h2 className="heading">Get In Touch</h2>
                <p>Far from the countries Vokalia and Consonantia</p>
            </div>
        </div> 
        <div className="row">
            <div className="col-lg-7">
                <form className="contact-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="row">
                    <div className="col-6">
                        <div className="form-group mb-5">
                            <label className="" for="fname">First name</label>
                            <input type="text" className="form-control" id="fname" />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group mb-5">
                            <label className="" for="lname">Last name</label>
                            <input type="text" className="form-control" id="lname" />
                        </div>
                    </div>
                </div>
                <div className="form-group mb-5">
                    <label className="" for="email">Email address</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mb-5">
                    <label className="" for="message">Message</label>
                    <textarea name="" className="form-control" id="message" cols="30" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                </div> 
        <div className="col-lg-4 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <h3 className="h5 mb-4">Contact Info</h3>
            <address className="text-black d-flex"><FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon><span>43 Raymouth Rd. Baltemoer, London 3910</span></address>
            <div className="mb-4"><FontAwesomeIcon icon={faPhone} /><span>+1(123)-456-7890</span></div>
            <div className="mb-4"><FontAwesomeIcon icon={faPhone} /><span>+1(123)-456-770</span></div>
            <div className="mb-4"><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon><span>info@mydomain.com</span></div>
            <div className="mb-4"><FontAwesomeIcon icon={faTelegram} /><span>https://Colorlib.com/</span></div>
            
        </div> 
    </div> 
</div>
  )
}

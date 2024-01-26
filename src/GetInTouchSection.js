import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function GetInTouchSection() {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,    
        });
      }, []);
  return (
    <div className="container mt-5 mb-5 pt-5 pb-5">
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
                            <div className="mb-5">
                                <label className="" for="fname">First name</label>
                                <input type="text" className="form-control border-0 border-bottom" id="fname" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-5">
                                <label className="" for="lname">Last name</label>
                                <input type="text" className="form-control border-0 border-bottom" id="lname" />
                            </div>
                        </div>
                    </div>
                    <div className=" mb-5">
                        <label className="" for="email">Email address</label>
                        <input type="email" className="form-control border-0 border-bottom" id="email" />
                    </div>
                    <div className="mb-5">
                        <label className="" for="message">Message</label>
                        <textarea name="" className="form-control border-0 border-bottom" id="message" cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary rounded-5">Send Message</button>
                </form>
            </div> 
            <div className="col-lg-4 ml-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="h5 mb-4 mt-4">Contact Info</h3>
                    <p className="text-black d-flex mb-4 me-2">
                        <FontAwesomeIcon icon={faLocationArrow} className="me-2" />43 Raymouth Rd. Baltemoer, London 3910
                    </p>
                    <p className="mb-4"><FontAwesomeIcon icon={faPhone} className="me-2"/> +1(123)-456-7890 , +1(123)-456-770  </p>
                    
                    <p className="mb-4"><FontAwesomeIcon icon={faEnvelope} className="me-2"/> info@mydomain.com</p>
                    <p className="mb-4"><FontAwesomeIcon icon={faTelegram} className="me-2"/> https://Colorlib.com/</p>
            </div>
    </div> 
</div>
  )
}

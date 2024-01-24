import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import './Service.css'
export default function Footer() {
  return (
    <div className="site-footer bg-secondry mt-5">

        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="widget">
                    <h3>About Launch<span className="text-primary">.</span> </h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div> 
                    <div className="widget">
                        <h3>Connect</h3>
                        <ul class="list-unstyled d-flex">
                            <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faInstagram} /></span></a></li>
                            <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faTwitter} /></span></a></li>
                            <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faFacebook} /></span></a></li>
                            <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faLinkedinIn} /></span></a></li>
                            <li><a href="#"><span className="icon"><FontAwesomeIcon icon={faPinterest} /></span></a></li>
                        
                        </ul>
                    </div> 
                </div> 
                <div className="col-lg-2 ml-4">
                    <div className="widget">
                        <h3>Projects</h3>
                        <ul className="list-unstyled float-left links ">
                            <li><a href="#" className="text2">La Lega Stadium</a></li>
                            <li><a href="#"  className="text2" >France Building</a></li>
                            <li><a href="#" className=" text2" >22 New Homes</a></li>
                            <li><a href="#" className="text2">Manage Center</a></li>
                            <li><a href="#" className="text2" >Sports Hall</a></li>
                        </ul>
                    </div> 
                </div> 
                <div className="col-lg-2">
                    <div className="widget">
                        <h3>Services</h3>
                        <ul className="list-unstyled float-left links">
                            <li><a href="#" className=" text2" >Architect</a></li>
                            <li><a href="#" className=" text2" >Interior Design</a></li>
                            <li><a href="#" className=" text2">Landscape Design</a></li>
                            <li><a href="#" className=" text2">Consultancy</a></li>
                        </ul>
                    </div> 
                </div> 
            <div className="col-lg-3">
                <div className="widget">
                    <h3>Contact</h3>
                    <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                    <div className="mt-4 mb-4"><a href="tel://11234567890" className=" text2 mb-4">+1(123)-456-7890</a></div>
                    <div className="mt-4 mb-4" ><a href="tel://11234567890" className=" text2 mb-4">+1(123)-456-7890</a></div>
                    <div className="mt-4 mb-4"><a href="mailto:info@mydomain.com" className=" text2 mb-4" >info@mydomain.com</a></div>
                    
                </div> 
            </div> 
        </div> 
        <div className="row mt-5">
            <div className="col-12 text-center">
                <p>

                Copyright ©<script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
            </div>
            </div>
        </div> 
</div>
  )
}

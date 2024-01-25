
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
export default function PriceSection() {
  return (

<div className="container mt-5 mb-5">
    <div className="row justify-content-between">
        <div className="col-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <h2 display="4">Pricing</h2>
            <p>Pricing for everyone. Choose your plan now!</p>
        </div>
        <div className="col-md-4">
        <div className="card rounded-5 mb-5" style={{ height: '440px'}} >
            
            <div className="card-body d-flex flex-column align-items-center">
            <div class="price">
                <span class="d-block plan" style={{ fontSize: "30px" }} >Free</span>
                <span class="price" style={{ fontSize: "30px",color:"blue" }} ><sup>$</sup><span>0</span></span>
            </div>
            <ul class="list-unstyled ul-check primary mb-5 mt-5">
            
                        <li><span><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>    There live the blind texts</p></span></li>
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>   Far far away behind the word</p></li>
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>   Far from the countries Vokalia and Consonantia</p></li>
                        
            </ul>
            <p class="text-center mb-0"><a href="#" class="btn rounded-5 btn-primary">Get Started</a></p>
            </div>
          </div>
            
            
        </div>

        <div className="col-md-4">
          <div className="card rounded-5 mb-5" style={{ height: '440px' }} >
            
            <div className="card-body d-flex flex-column align-items-center">
            <div className="price">
                <span className="d-block plan" style={{ fontSize: "30px" }} >Standard</span>
                <span className="price" style={{ fontSize: "30px",color:"blue" }} ><sup>$</sup><span>19.99</span></span>
            </div>
            <ul class="list-unstyled ul-check primary mb-5 mt-5">
            
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>   There live the blind texts</p></li>
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>   Far far away behind the word</p></li>
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>   Far from the countries Vokalia and Consonantia</p></li>
                        
            </ul>
            <p class="text-center mb-0"><a href="#" class="btn rounded-5 btn-primary">Get Started</a></p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
        <div className="card rounded-5 mb-5" style={{ height: '440px' }} >
            
            <div className="card-body d-flex flex-column align-items-center">
            <div class="price">
                <span class="d-block plan" style={{ fontSize: "30px" }} >Premium</span>
                <span class="price" style={{ fontSize: "30px",color:"blue" }} ><sup>$</sup><span>79.99</span></span>
            </div>
            <ul class="list-unstyled ul-check primary mb-5 mt-5 mr-5">
            
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>    There live the blind texts</p></li>
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>   Far far away behind the word</p></li>
                        <li><p><FontAwesomeIcon icon={faCheck} style={{color:'blue'}}/>   Far from the countries Vokalia and Consonantia</p></li>
                        
            </ul>
            <p class="text-center mb-0"><a href="#" class="btn rounded-5 btn-primary">Get Started</a></p>
            </div>
          </div>
        </div>
    </div> 
  </div>     


  )
}

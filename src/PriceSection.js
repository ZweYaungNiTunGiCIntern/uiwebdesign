import React from 'react'

export default function PriceSection() {
  return (

<div className="container mt-5 mb-3 bg-light">
    <div className="row ">
        <div className="col-12 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <h2 display="4">Pricing</h2>
            <p>Pricing for everyone. Choose your plan now!</p>
        </div>
        <div className="col-md-4">
          
            
            <div className="card">
                <div className="card-body">
                    <div className="price">
                        <span className="d-block plan" style={{ fontSize: "30px" }}>Free</span>
                        <span className="price" style={{ fontSize: "30px" }}><sup>$</sup><span>0</span></span>
                    </div>
                        <ul className="list-unstyled ul-check primary mb-5">
                        <li>There live the blind texts</li>
                        <li>Far far away behind the word</li>
                        <li>Far from the countries Vokalia and Consonantia</li>
                        </ul>
                        <p className="text-center mb-0"><a href="#" className="btn btn-outline-primary">Get Started</a></p>
                </div>
            </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            
            <div className="card-body">
            <div class="price">
                <span class="d-block plan" style={{ fontSize: "30px" }} >Standard</span>
                <span class="price" style={{ fontSize: "30px",color:"blue" }} ><sup>$</sup><span>19.99</span></span>
            </div>
            <ul class="list-unstyled ul-check primary mb-5">
                <li>There live the blind texts</li>
                <li>Far far away behind the word</li>
                <li>Far from the countries Vokalia and Consonantia</li>
            </ul>
            <p class="text-center mb-0"><a href="#" class="btn btn-primary">Get Started</a></p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            
            <div className="card-body">
                <div className="price">
                        <span className="d-block plan" style={{ fontSize: "30px" }}>Premium</span>
                        <span className="price" style={{ fontSize: "30px" }}><sup>$</sup><span>0</span></span>
                    </div>
                        <ul className="list-unstyled ul-check primary mb-5">
                        <li>There live the blind texts</li>
                        <li>Far far away behind the word</li>
                        <li>Far from the countries Vokalia and Consonantia</li>
                        </ul>
                        <p className="text-center mb-0"><a href="#" className="btn btn-outline-primary">Get Started</a></p>
                </div>
            </div>
          </div>
        </div>
    </div> 
        


  )
}

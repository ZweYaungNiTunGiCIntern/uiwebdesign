import React, { useRef } from "react";
import { Carousel } from "react-bootstrap";

import dashboard from "./dashboard.jpg";

export default function ServiceDashboard() {
  const dashboards = [dashboard, dashboard, dashboard, dashboard];
  const carouselRef = useRef(null);

  const handleServiceLinkClick = (index) => {
    // Move the carousel to the specified slide index
    carouselRef.current?.to(index);
  };

  return (
    <div className="container my-2 pt-5 pb-5">
      <div className="row">
        <div
          className="col-md-7 mt-5"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="800"
        >
          <Carousel>
            {dashboards.map((dashboard, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={dashboard}
                  alt={`Slide ${index + 1}`}
                />
                
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-md-5 mt-5">
            <a href="#" 
                className="service link horizontal d-flex aos-init aos-animate active text-decoration-none text-dark" 
                data-aos="fade-left" data-aos-delay="0"
                data-index="1"
                onClick={() => handleServiceLinkClick(0)} >
                <div className="row">
                    <div className="col-md-2 service-icon1 text-light rounded-3 fs-5 text-center medium-reset-order ms-2" style={{ width: 40, height: 40 }}>
                        {/* Your icon SVG or any other representation */}
                        <svg className="bi bi-app-indicator" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"></path>
                            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                        </svg>
                    </div>
                    <div className="col-md-10 service-contents">
                        <h3>Grow Your Business</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </div>
            </a><a href="#" 
                className="service link horizontal d-flex aos-init aos-animate active text-decoration-none text-dark" 
                data-aos="fade-left" data-aos-delay="0"
                data-index="2"
                onClick={() => handleServiceLinkClick(1)} >
                <div className="row">
                    <div className="col-md-2 service-icon2 text-light rounded-3 fs-5 text-center ms-2" style={{ width: 40, height: 40 }}>
                        {/* Your icon SVG or any other representation */}
                        <svg className="bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z"></path>
                            <path fillRule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z"></path>
                        </svg>
                    </div>
                    <div className="col-md-10 service-contents">
                        <h3>Build Products</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </div>
            </a>
            <a href="#" 
                className="service link horizontal d-flex aos-init aos-animate active text-decoration-none text-dark" 
                data-aos="fade-left" data-aos-delay="0"
                data-index="3"
                onClick={() => handleServiceLinkClick(2)} >
                <div className="row">
                    <div className="col-md-2 service-icon3 text-light rounded-3 fs-5 text-center ms-2" style={{ width: 40, height: 40 }}>
                        {/* Your icon SVG or any other representation */}
                        <svg className="bi bi-briefcase" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"></path>
                            <path fillRule="evenodd" d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"></path>
                        </svg>
                    </div>
                    <div className="col-md-10 service-contents">
                        <h3>Success Everyday</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </div>
            </a>
            <a href="#" 
                className="service link horizontal d-flex aos-init aos-animate active text-decoration-none text-dark" 
                data-aos="fade-left" data-aos-delay="0"
                data-index="4"
                onClick={() => handleServiceLinkClick(3)} >
                <div className="row">
                    <div className="col-md-2 service-icon1 text-light rounded-3 fs-5 text-center ms-2" style={{ width: 40, height: 40 }}>
                    
                        <svg className="bi bi-collection" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14.5 13.5h-13A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5zm-13 1A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z"></path>
                        </svg>
                    </div>
                    <div className="col-md-10 service-contents">
                        <h3>Bring Idesa to life</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    </div>
                </div>
            </a>
            
            
        </div>
      </div>
    </div>
  );
}

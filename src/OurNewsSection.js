
import person1 from "./person_1.jpg.webp"
import person2 from "./person_2.jpg.webp"
import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import person3 from "./person_3.jpg.webp"
export default function OurNewsSection() {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration
          offset: 200,    // Offset (in pixels) from the top of the document
        });
      }, []);
  return (
    
        <div className="container mt-5 mb-5 bg-light">
            <div className="row mb-4">
                <div className="col-12 text-center aos-init aos-animate mt-5" data-aos="fade-up" data-aos-delay="0">
                    <h2 className="heading">Our News</h2>
                    <p>Far from the countries Vokalia and Consonantia</p>
                </div>
            </div> 
            <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                    <div className="news-item">
                        <div className="vcard d-flex align-items-center mb-4">
                            <div className="img-wrap">
                                <img src={person1} alt="Image" className="img-fluid  rounded-circle" width={50} height={50}/>
                            </div>
                        <div className="post-meta">
                            <div><strong>Posted by James</strong></div>
                            <span>Jun 14, 2020</span>
                        </div>
                    </div>
                <div className="news-contents mb-4">
                    <span className="post-meta">Digital Service, 4 min read</span>
                    <h5><a href="#" className="text-decoration-none meta1">Far far away behind the word mountains far from the countries</a></h5>
                </div>
                <p className="mb-0">
                <a href="#" className="read-more-arrow">
                <svg className="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"></path>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"></path>
                </svg>
                </a></p>
                </div> 
            </div>
            <div className="col-md-6 mb-4 mb-lg-0 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                <div className="news-item">
                    <div className="vcard d-flex align-items-center mb-4">
                        <div className="img-wrap">
                            <img src={person2} alt="Image" className="img-fluid rounded-circle" width={50} height={50} />
                        </div>
                    <div className="post-meta">
                        <div><strong>Posted by Khan</strong></div>
                        <span>Jun 14, 2020</span>
                    </div>
                </div>
                <div className="news-contents mb-4 ">
                    <span className="post-meta-2">Digital Service, 4 min read</span>
                    <h5><a href="#" className="text-decoration-none meta1">Far far away behind the word mountains far from the countries</a></h5>
                </div>
                <p className="mb-0">
                <a href="#" className="read-more-arrow">
                    <svg className="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"></path>
                    <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"></path>
                    </svg>
            </a></p>
            </div> 
            </div>
            <div className="col-md-12 col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                <div className="news-item">
                    <div className="vcard d-flex align-items-center mb-4">
                    <div className="img-wrap person">
                        <img src={person3} alt="Image" className="img-fluid rounded-circle" width={50} height={50}/>
                    </div>
                    <div className="post-meta">
                        <div><strong>Posted by Rob</strong></div>
                        <span>Jun 14, 2020</span>
                    </div>
                    </div>
                    <div className="news-contents mb-4 mt-4">
                        <span className="post-meta-2">Digital Service, 4 min read</span>
                        <h5><a href="#" className="text-decoration-none meta1">Far far away behind the word mountains far from the countries</a></h5>
                    </div>
                        <p className="mb-0"><a href="#" className="read-more-arrow">
                        <svg className="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"></path>
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"></path>
                        </svg>
                    </a></p>
                </div> 
                </div>
            </div>
        </div>

  )
}

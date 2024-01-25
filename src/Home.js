import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import mbm from './mbm.PNG'
import person from './person_0.jpg.webp'
export default function Home() {
    useEffect(() => {
        Aos.init({
          duration: 1000, 
          offset: 200,    
        });
      }, []);
  return (
    <div className="mt-5 p-5">
        <div class="container">
            <div className="row justify-item-center">
                <div className="col-lg-4">
                    
                    <h3 className="display=5">Selling Digital Services</h3>
                    <div className="mb-4" data-aos="fade-up" data-aos-once="true" data-aos-duration="1100">
                        <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind texts.
                        Separated they live in Bookmarksgrove right at the coast
                        </p>
                        <ul className="list-custom-icon">
                            <li className="text-color mb-2">
                                There live the blind texts
                            </li>
                            <li className="text-color">Far far away behind the word</li>
                        </ul>
                     </div>
                    <div className="mb-4">
                        
                        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1200">
                            <i>
                            “Separated they live in Bookmarksgrove right at the coast of
                            the Semantics, a large language ocean. A small river named
                            Duden flows by their place and supplies it with the necessary
                            regelialia. ”
                            </i>
                            <div className="d-flex mt-4">
                                <img className="rounded-circle" src={person} width={50} height={50} />
                                <div className="ms-3 flex-grow-1">
                                    <div className="small-text">James Anderson</div>
                                    <p>Facebook, Product Lead</p>
                                </div>
                
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="col-lg-7">
                    <img src={mbm} alt="Image Description" class="img-fluid" />
                </div>
            </div>
        </div>
    </div>
    
  )
}

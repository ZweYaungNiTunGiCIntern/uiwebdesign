import React from 'react'
import market from './market-launch-pana.svg'
export default function ImageTextSection() {
  return (

    <div className="mt-5 mb-5 p-5">
    <div class="container">
    <div className="row align-items-center">
    <div className="col-lg-4">
        <h1 class="display-8">GIC Myanmar</h1>
        <p>The GIC Group consists of three companies, Japan (Global Innovation Consulting Inc. as GIC), Myanmar (GIC Myanmar Co., Ltd ., as GICM), and US (GIC Silicon Valley Lab Inc ., as GSVL). Our main business is offshore system development in Japan/Myanmar, including LAB-type and contract development. In the US, we also play a role in conducting various investigations on advanced cases such as DX and IoT.</p>
        <div className="justify-content-between">
            <button class="btn btn-sm btn-outline-primary">See Features</button>
        
            <button class="btn btn-sm btn-outline-primary">Pricing</button>
        </div>
        
    </div>
    

    
    <div className="col-lg-7">
        <img src={market} alt="Image Description" class="img-fluid" />
    </div>
    </div>
    </div>
</div>

   
   



  )
}

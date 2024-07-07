import React from 'react'
import "./MainBanner.css"
import pic1 from "./assets/picone.png"
import pic2 from "./assets/pictwo.png"
import Intro from './subcomponents/Intro'

function MainBanner() {
  return (
    <div className="outer">
      {/* <div className="container text-center" id="container"> */}
        <div className="row">
          <div className="col-sm-8" >
            <Intro/>
          </div>
          <div className="col-sm-4">Sign in / Join</div>
        </div>
        <div className="picture-container">
        <div className="row">
            <div className="col-sm-4">
              <img src={pic1}  />
            </div>
            <div className="col-sm-4">
              <img src={pic2} />
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default MainBanner

import React from 'react'
import quote from './assets/quote.png'
import audio from './assets/AudioTrack.png'
import mobile from './assets/AudioTrackmob.png'
import profile from './assets/profile.png'
import mobprof from './assets/profilemob.png'

function CardComp() {
  return (
    <div className="card">
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", gap: "5px"}} className="card-body">
          <div style={{display: "flex", alignItems: "center", gap: "5px", marginBottom: "15px"}}>
            <img style={{marginBottom: "10px"}} src={quote} />
            <h5 style={{marginBottom: "0px"}} className="card-title">Add your own</h5>
          </div>
          <p className="card-text">In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
          <div className='container mx-auto'>
            <div className='row'>
              <div className='col-12 col-xl-6 col-sm-12 p-2'>
                <img id="pc" className='img-fluid img-fluid-custom' src={audio} />
                <img id="mobile" className='img-fluid img-fluid-custom' src={mobile} />
              </div>
              <div  className='col-12 col-xl-6 col-sm-6 p-2'>
                <img style={{marginLeft: "160px", height: "90px"}} id="pc" className='img-fluid img-fluid-custom' src={profile} />
                <img id="mobile" className='img-fluid img-fluid-custom' src={mobprof} />
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CardComp

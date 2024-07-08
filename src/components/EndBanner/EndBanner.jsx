import React from 'react'
import './EndBanner.css'

import one from './assets/1.png'
import two from './assets/2.png'

function EndBanner() {
  return (
    <div className='container-fluid'>
        <div className='endbannerin'>
            <div className='hobby'>
                <p className='heading'>Your <span style={{color: "#8064A2"}}>Hobby</span>, Your <span style={{color: "#0096C8"}}>Community</span></p>
                <button className='getstarted'>Get Started</button>
            </div>
            <div className='pics'>
              <img src={one} className='img-fluid img-fluid-custom'/>
              <img src={two} className='img-fluid img-fluid-custom' />
            </div>
        </div>
    </div>
  )
}

export default EndBanner

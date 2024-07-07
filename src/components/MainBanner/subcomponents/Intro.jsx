import React from 'react'
import "./Intro.css"

function Intro() {
  return (
    <div className="container">
      <div className="Intro-container">
        Explore your <span id="one">hobby</span> or <span id="two">passion</span>
      </div>

      <p style={{marginTop: "32px", textAlign:"left", fontSize: "14px"}}>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
      </p>

      <p style={{marginTop: "32px", textAlign:"left", fontSize: "14px"}}>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
    </div>
  )
}

export default Intro

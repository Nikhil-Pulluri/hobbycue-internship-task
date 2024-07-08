import React from 'react'
import './Footer.css'
import fb from './assets/fb.png'
import x from './assets/x.png'
import google from './assets/google.png'
import insta from './assets/insta.png'
import mail from './assets/mail.png'
import pintrest from './assets/pintrest.png'
import telegram from './assets/telegram.png'
import yt from './assets/yt.png'

function Footer() {
  return (
    <div className='footer-outer'>
    <div className="container text-center">
      <div className="row">
        <div className="col col-xl-3 col-sm-12">
          <ul style={{listStyle: "none", marginLeft: "0px", textAlign: "left"}} className="list">
            <li className="list-item" style={{ fontWeight: "700" }}>Hobbycue</li>
            <li className="list-item">About Us</li>
            <li className="list-item">Our Services</li>
            <li className="list-item">Work with Us</li>
            <li className="list-item">FAQ</li>
            <li className="list-item">Contact Us</li>
          </ul>
        </div>
        <div className="col col-xl-3 col-sm-12">
          <ul style={{listStyle: "none", marginLeft: "0px", textAlign: "left"}} className="list">
            <li className="list-item" style={{ fontWeight: "700" }}>How Do I</li>
            <li className="list-item">Sign Up</li>
            <li className="list-item">Add a Listing</li>
            <li className="list-item">Claim Listing</li>
            <li className="list-item">Post a Query</li>
            <li className="list-item">Add a Blog Post</li>
            <li className="list-item">Other Queries</li>
          </ul>
        </div>
        <div className="col col-xl-3 col-sm-12">
          <ul style={{listStyle: "none", marginLeft: "0px", textAlign: "left"}} className="list">
            <li className="list-item" style={{ fontWeight: "700" }}>Quick links</li>
            <li className="list-item">Listings</li>
            <li className="list-item">Blog Posts</li>
            <li className="list-item">Shop/Store</li>
            <li className="list-item">Community</li>
          </ul>
        </div>
        <div className="col col-xl-3 col-sm-12">
          <p style={{ fontWeight: "700", marginBottom: "10px" }}>Social Media</p>
          <div style={{display: "flex", gap: "10px", justifyContent: "center",marginTop: "20px"}} className="social-media">
            <img src={fb} alt="Facebook" />
            <img src={x} alt="X" />
            <img src={insta} alt="Instagram" />
            <img src={pintrest} alt="Pinterest" />
            <img src={google} alt="Google" />
            <img src={yt} alt="YouTube" />
            <img src={telegram} alt="Telegram" />
            <img src={mail} alt="Mail" />
          </div>

          <div style={{marginTop: "50px"}} className="invite-friends">
            <p style={{ fontWeight: "700", marginBottom: "10px" }}>Invite Friends</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Email ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <span style={{color: "white"}} className="input-group-text" id="basic-addon2">Invite</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer

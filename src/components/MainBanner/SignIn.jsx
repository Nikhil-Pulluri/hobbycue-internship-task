import React from 'react'
import google from './assets/google.png'
import fb from './assets/fb.png'
import connect from './assets/connect.png'
import lock from './assets/lock.png'

function SignIn() {
  return (
    <div style={{marginTop: "20px", display: "flex", flexDirection: "column"}}>
      <button style={{backgroundColor: "#F7F5F9", display: "flex", justifyContent: "center" , gap: " 40px" ,border: "2px solid black", padding: "10px 40px", borderRadius: "8px"}}>
        <img style={{marginTop: "5px"}} src={google} />
        <div style={{marginBottom: "0px"}}> 
          Continue with Google
        </div>
      </button>

      <button style={{backgroundColor: "#F7F5F9", marginTop: "15px",display: "flex", justifyContent: "center" , gap: " 20px" ,border: "2px solid black", padding: "10px 40px", borderRadius: "8px"}}>
        <img style={{marginTop: "5px"}} src={fb} />
        <div style={{marginBottom: "0px"}}> 
          Continue with Facebook
        </div>
      </button>

      <img className="img-fluid" style={{marginTop: "15px", marginBottom: "15px"}} src={connect} />

      <input style={{backgroundColor: "white", border: "none", borderRadius: "8px", padding: "10px 20px"}} placeholder='Email'  type="email" />

      <input style={{marginTop: "15px", backgroundColor: "white", border: "none", borderRadius: "8px", padding: "10px 20px"}} placeholder='Password'  type="password" />

      <div style={{marginTop: "15px", display: "flex", marginLeft: "10px"}}>
          <input type="checkbox"  /><div style={{marginLeft: "6px"}}>Remember Me</div>


          <img style={{height: "16px", width: "15.76px", marginTop: "5px", marginLeft: "90px"}} src={lock}/>
          <button style={{border: "none", backgroundColor: "#F7F5F9"}}>Forget password?</button>

      </div>

      <button style={{backgroundColor: "#F7F5F9" ,marginTop: "15px",display: "flex", justifyContent: "center" , gap: " 20px" ,border: "2px solid black", padding: "10px 40px", borderRadius: "8px"}}>
        <div style={{marginBottom: "0px"}}> 
          Continue
        </div>
      </button>

    </div>
  )
}

export default SignIn

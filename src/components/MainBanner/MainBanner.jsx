import React,{useState} from 'react'
import "./MainBanner.css"
import pic1 from "./assets/picone.png"
import pic2 from "./assets/pictwo.png"
import Intro from './subcomponents/Intro'
import SignIn from './SignIn'
import Join from './Join'


function MainBanner() {
  const [active, setActive] = useState('sign')
  return (

  <div style={{backgroundColor: "#F7F5F9"}} className="container">
  <div className="row">
    <div className="col-xl-8"><Intro/></div>




    <div className="col-xl-4">
        <div >
          <button
          style={{backgroundColor: "#F7F5F9",border: "none"}}
          className='sign'
          onClick={()=> setActive('sign')}
          >
            Sign In
          </button>
          <button
          style={{backgroundColor: "#F7F5F9",border: "none"}}
          className='join'
          onClick={()=>{
            setActive('join')
          }}
          >
            Join
          </button>
        </div>

        
        <div>
          {active==='sign'? <SignIn/> : <Join/>}
        </div>


    </div>




  </div>
  <div style={{marginTop: "20px"}} className="row">
    <div className="col-xl-4"><img src={pic1} alt="pic1"  /></div>
    <div className="col-xl-4"><img src={pic2} alt="pic2"  /></div>
  </div>
</div>


  )
}

export default MainBanner

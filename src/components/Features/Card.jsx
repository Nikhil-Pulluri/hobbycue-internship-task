import React from 'react'
import "./Card.css"

function Card
(props) {

  return (
        // <div className="row">
        //   <div className="col-sm mb-3 mb-sm-0">
        //     <div className="card">
        //       <div className="card-body">
        //         <span className='image-title' style={{display: "flex", alignItems: "center", gap: "5px"}}>
        //           <img src={props.image}/>
        //           <h5 style={{margin: "0px"}} className="card-title">{props.title}</h5>
        //         </span>
        //         <p className="card-text">{props.content}</p>
        //         <button type="button" className="button" >{props.button}</button>
        //       </div>
        //     </div>
        //   </div>
        // </div>

        <div className="col-sm mb-3 mb-sm-0">
      <div className="card">
        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}} className="card-body card-content">
          <div className="image-title" style={{display: "flex", alignItems: "center", gap: "5px", marginBottom: "15px"}}>
            <img src={props.image}  className="card-image" />
            <h5 style={{margin: "0px"}} className="card-title">{props.title}</h5>
          </div>
          <p className="card-text">{props.content}</p>
          <button type="button" className="button">{props.button}</button>
        </div>
      </div>
    </div>


  )
}

export default Card


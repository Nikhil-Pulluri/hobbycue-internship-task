import React from 'react'
import add from './assets/Add.png'

function AddCard() {
  return (
    <div className="card">
      <div style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly"}} className="card-body">
          <div style={{display: "flex", alignItems: "center", gap: "5px", marginBottom: "15px"}}>
            <img style={{marginBottom: "10px"}} src={add} />
            <h5 style={{marginBottom: "0px"}} className="card-title">Add your own</h5>
          </div>
          <p className="card-text">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
          <button href="#" className="button">Add new</button>
      </div>
    </div>
  )
}

export default AddCard

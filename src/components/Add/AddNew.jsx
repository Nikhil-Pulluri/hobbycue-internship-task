import React from 'react'
import './Add.css'
import Cards from './Cards'
import add from './assets/Add.png'


function AddNew() {
  return (
    <div>

<button style={{border: "1px solid #8064A2"}} type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add new
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div style={{padding: "50px"}} className="modal-dialog modal-xl modal-dialog-custom text-center">
    <div className="modal-content text-center">
      <div style={{marginTop: "20px"}}>
        <h1 className="modal-title fs-5" id="exampleModalLabel"><img src={add} />Add Your Listing</h1>
      </div>
      <div className="modal-body">
        <Cards/>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default AddNew

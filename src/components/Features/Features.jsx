import React from 'react'
import Card from './Card'
import people from './assets/people.png'
import place from './assets/place.png'
import product from './assets/product.png'
import program from './assets/program.png'

function Features() {
  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ padding: '100px 0px' }} className="container text-center">
        <div className="row g-4"> 
          <div className="col-12 col-md-6 col-xl-6"><Card image={people} title="People" content="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator." button="Connect"/></div>
          <div className="col-12 col-md-6 col-xl-6"><Card image={place} title="Place" content="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue." button="Meet up"/></div>
          <div className="col-12 col-md-6 col-xl-6"><Card image={product} title="Product" content="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members." button="Get it"/></div>
          <div className="col-12 col-md-6 col-xl-6"><Card image={program} title="Programs" content="Find events, meetups and workshops related to your hobby.  Register or buy tickets online." button="Attend"/></div>
        </div>
      </div>
    </div>
  )
}

export default Features

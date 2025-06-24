import React from 'react'
import Destination from './Destination'
import WhoModel from './whoModel'
function MiniNav() {
  return (
    <div className="container miniNav rounded-pill my-2 mb-4 p-2 d-flex justify-content-start align-items-center gap-4">

    <div className="Destination mx-3 pe-3 mt-1 border-end">
      <h6 className='miniNavHeading'>Where</h6>
      <Destination/>

    </div>
  
    <div className="CheckIn  pe-5 mt-2 border-end">
      <h6 className='miniNavHeading'>Check in</h6>
      <p className='miniNavPara'>Add Dates</p>
    </div>
    
    <div className="CheckOut pe-5 mt-2 border-end">
      <h6 className='miniNavHeading'>Check Out</h6>
      <p className='miniNavPara'>Add Dates</p>
    </div>
  
    <div className="Guest d-flex justify-content-between align-items-center ps-2">
 <WhoModel/>
      <div className="GuestIcon d-flex justify-content-center align-items-center ">
      <i className="bi bi-search SearchIcon"></i>

      </div>
    </div>
  
  </div>
  
  )
}

export default MiniNav

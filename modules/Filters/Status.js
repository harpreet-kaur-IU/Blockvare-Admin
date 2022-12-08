import React, { useState } from 'react'
import ArrowDown from '../../icons/ArrowDown'
const Status = () => {
  const[dropdown,setDropdown] = useState(false)
  const dropdownHandler = () =>{
    setDropdown(prev => !prev)
  }
  return (
    <div className='mt-8 d-flex d-flex-column'>
        {/* category filter heading */}
        <div onClick={dropdownHandler} className='cursor-pointer d-flex d-justify-space-between d-align-center'>
            <h4 className='f-600 l-22'>Status</h4>
            <ArrowDown></ArrowDown>
        </div>
        {/* category filter items */}
        <div className={`d-flex-column gap-2 mt-3 ${dropdown?"d-flex":"d-none"}`}>
            <div className='d-flex d-align-center gap-1'>
                <input type="checkbox" name="Collectible" value="Collectible"></input>
                <label className='f-400 h4 l-22 text-grey-6'>Pending</label>
            </div>
            <div className='d-flex d-align-center gap-1'>
                <input type="checkbox" name="Collectible" value="Collectible"></input>
                <label className='f-400 h4 l-22 text-grey-6'>Unverified</label>
            </div>
            <div className='d-flex d-align-center gap-1'>
                <input type="checkbox" name="Collectible" value="Collectible"></input>
                <label className='f-400 h4 l-22 text-grey-6'>Verified</label>
            </div>
            <div className='d-flex d-align-center gap-1'>
                <input type="checkbox" name="Collectible" value="Collectible"></input>
                <label className='f-400 h4 l-22 text-grey-6'>Spam</label>
            </div>
            
        </div>
    </div>
  )
}

export default Status
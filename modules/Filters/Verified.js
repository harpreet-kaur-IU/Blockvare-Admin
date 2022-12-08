import React, { useState } from 'react'
import ArrowDown from '../../icons/ArrowDown'
const Verified = () => {
    const[dropdown,setDropdown] = useState(false)
    const dropdownHandler = () =>{
      setDropdown(prev => !prev)
    }
    return (
      <div className='mt-8 d-flex d-flex-column'>
          {/* category filter heading */}
          <div onClick={dropdownHandler} className='cursor-pointer d-flex d-justify-space-between d-align-center'>
              <h4 className='f-600 l-22'>Verified</h4>
              <ArrowDown></ArrowDown>
          </div>
          {/* category filter items */}
          <div className={`d-flex-column gap-2 mt-3 ${dropdown?"d-flex":"d-none"}`}>
              <div className='d-flex d-align-center gap-1'>
                  <input type="checkbox" name="buyer" value="buyer"></input>
                  <label className='f-400 h4 l-22 text-grey-6'>Verified buyers only</label>
              </div>
              <div className='d-flex d-align-center gap-1'>
                  <input type="checkbox" name="seller" value="seller"></input>
                  <label className='f-400 h4 l-22 text-grey-6'>Verified seller only</label>
              </div>
              <div className='d-flex d-align-center gap-1'>
                  <input type="checkbox" name="product" value="product"></input>
                  <label className='f-400 h4 l-22 text-grey-6'>Verified product only</label>
              </div>
          </div>
      </div>
    )
}

export default Verified
import React, { useState } from 'react'
import ArrowDown from '../../icons/ArrowDown'
const CategoryFilter = () => {
    const[dropdown,setDropdown] = useState(false)
    const dropdownHandler = () =>{
        setDropdown(prev => !prev)
    }
  return (
    <div className='mt-8 d-flex d-flex-column'>
        {/* category filter heading */}
        <div onClick={dropdownHandler} className='cursor-pointer d-flex d-justify-space-between d-align-center'>
            <h4 className='f-600 l-22'>Categories</h4>
            <ArrowDown></ArrowDown>
        </div>
        {/* category filter items */}
        <div className={`d-flex-column gap-2 mt-3 ${dropdown?"d-flex":"d-none"}`}>
            <div className='d-flex d-align-center gap-1'>
                <input type="checkbox" name="Collectible" value="Collectible"></input>
                <label className='f-400 h4 l-22'>Collectible</label>
            </div>
            <div className='d-flex d-align-center gap-1'>
                <input type="checkbox" name="Watch" value="Watch"></input>
                <label className='f-400 h4 l-22'>Watch</label>
            </div>
            <div className='d-flex d-align-center gap-1'>
                <input type="checkbox" name="Motors" value="Motors"></input>
                <label className='f-400 h4 l-22'>Motors</label>
            </div>
        </div>
    </div>
  )
}

export default CategoryFilter
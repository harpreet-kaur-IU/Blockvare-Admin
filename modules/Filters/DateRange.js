import React,{useState} from 'react'
import ArrowDown from '../../icons/ArrowDown'
import styles from '../css/Filters/Price.module.css'
const DateRange = () => {
  const[dropdown,setDropdown] = useState(false)
  const[min,setMin] = useState("")
  const[max,setMax] = useState("")

  const dropdownHandler = () =>{
      setDropdown(prev => !prev)
  }
  const minHandler = (e) =>{
    setMin(e.target.value)
  }
  const maxHandler = (e) =>{
    setMax(e.target.value)
  }
  return (
    <div className='mt-8 d-flex d-flex-column'>
      {/* DateRange filter heading */}
      <div onClick={dropdownHandler} className='cursor-pointer d-flex d-justify-space-between d-align-center'>
          <h4 className='f-600 l-22'>Date Range</h4>
          <ArrowDown></ArrowDown>
      </div>
      {/* DateRange filter items */}
        <form className={`col-12 gap-2 mt-3 ${dropdown?"d-flex":"d-none"}`}>
            <div className='col-6 d-flex d-flex-column gap-1'>
              <label className='f-400 h5 l-22'>Start</label>
              <input className={`col-12 f-400 l-22 h4 text-grey-4 ${styles["input"]}`} type="date" name="min" value={min} onChange={minHandler}></input> 
            </div>
            <div className='col-6 d-flex d-flex-column gap-1'>
              <label className='f-400 h5 l-22'>End</label>
              <input className={`col-12 f-400 l-22 h4 text-grey-4 ${styles["input"]}`} type="date" name="max" value={max} onChange={maxHandler}></input> 
            </div>
        </form>
    </div>
  )
}

export default DateRange
import React from 'react'
import styles from '../css/Filters/Filter.module.css'
import CategoryFilter from './CategoryFilter'
import Price from './Price'
import DateRange from './DateRange'
import Status from './Status'
import Verified from './Verified'
const Filter = (props) => {
  return (
    <div className={`${styles["wrapper"]}`}>
        <div className='d-flex d-flex-column'>
            <div className='d-flex d-align-center d-justify-space-between'>
                <h2 className='f-600 l-26 text-grey-6'>Filters</h2>
                <h5 onClick={props.handler} className='cursor-pointer f-600 l-22 text-grey-4'>RESET ALL</h5>
            </div>
            <CategoryFilter></CategoryFilter>
            <Price></Price>
            <DateRange></DateRange>
            <Status></Status>
            <Verified></Verified>
        </div>
    </div>
  )
}

export default Filter
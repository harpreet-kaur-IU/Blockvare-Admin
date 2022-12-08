import { useRouter } from 'next/router'
import React from 'react'
import styles from '../css/Users/UserTable.module.css'
const UserTable = (props) => {
  const router = useRouter()
  const userDetailsHandler = () =>{
    router.push(`/users/${8}`)
  }
  return (
    <div className={`${styles["booking-table-scroll-section"]}`}>
      <div className={`${styles["booking-table-wrapper"]}`}>
        <div className={`${styles["booking-table-header-row"]} d-flex d-align-center`}>
          <h4 className='l-26 f-400'>ID</h4>
          <h4 className='l-26 f-400'>Name</h4>
          <h4 className='l-26 f-400'>Created</h4>
          <h4 className='l-26 f-400'>Owned</h4>
          <h4 className='l-26 f-400'>Account Created On</h4>
          <h4 className='l-26 f-400'>Portfolio</h4>
          <h4 className='l-26 f-400'>Status</h4>
        </div>
        {props.status === "all" &&
          <>
            <div className={`${styles["booking-table-column"]} d-flex d-align-start`}>
              <h4 onClick={userDetailsHandler} className='cursor-pointer l-26 f-400'>#6318</h4>
              <div className={`d-flex ${styles["seller-wrapper"]}`}>
                <img src='product-img.png'></img>
                <h4 className='l-26 f-400'>Jacky Morty</h4>
              </div>
              <h4 className='l-26 f-400'>4</h4>
              <h4 className='l-26 f-400'>12</h4>
              <h4 className='l-26 f-400'>2 Feb, 2022, 12:34</h4>
              <h4 className='l-26 f-600'>ETH 2.03</h4>
              <div className={`d-flex pending ${styles["status-wrapper"]}`}>
                <h4 className='l-26 f-600'>Pending</h4>
              </div>
            </div>
          </>
        }
        {props.status === "pending" &&
          <>
            <div className={`${styles["booking-table-column"]} d-flex d-align-start`}>
              <h4 className='l-26 f-400'>#6318</h4>
              <h4 className='l-26 f-400'>2 Feb, 2022, 12:34</h4>
              <img className={`${styles["product-image"]}`} src='product-img.png'></img>
              <h4 className='l-26 f-600 word-break'>Omega Submariner Sapphire Edition 1998 Watch</h4>
              <div className={`d-flex ${styles["seller-wrapper"]}`}>
                <img src='product-img.png'></img>
                <h4 className='l-26 f-400'>Jacky Morty</h4>
              </div>
              <h4 className='l-26 f-400'>Watch</h4>
              <h4 className='l-26 f-600'>ETH 2.03</h4>
              <div className={`d-flex d-justify-center pending ${styles["status-wrapper"]}`}>
                <h4 className='l-26 f-600'>Pending</h4>
              </div>
              <div className={`${styles["action-wrapper"]}`}>
                <img src='action-icon.svg'></img>
              </div>
            </div>
          </>
        }
        {props.status === "unverified" &&
          <>
            <div className={`${styles["booking-table-column"]} d-flex d-align-start`}>
              <h4 className='l-26 f-400'>#6318</h4>
              <h4 className='l-26 f-400'>2 Feb, 2022, 12:34</h4>
              <img className={`${styles["product-image"]}`} src='product-img.png'></img>
              <h4 className='l-26 f-600 word-break'>Omega Submariner Sapphire Edition 1998 Watch</h4>
              <div className={`d-flex ${styles["seller-wrapper"]}`}>
                <img src='product-img.png'></img>
                <h4 className='l-26 f-400'>Jacky Morty</h4>
              </div>
              <h4 className='l-26 f-400'>Watch</h4>
              <h4 className='l-26 f-600'>ETH 2.03</h4>
              <div className={`d-flex d-justify-center unverified ${styles["status-wrapper"]}`}>
                <h4 className='l-26 f-600'>Unverified</h4>
              </div>
              <div className={`${styles["action-wrapper"]}`}>
                <img src='action-icon.svg'></img>
              </div>
            </div>
          </>
        }
        {props.status === "verified" &&
          <>
            <div className={`${styles["booking-table-column"]} d-flex d-align-start`}>
              <h4 className='l-26 f-400'>#6318</h4>
              <h4 className='l-26 f-400'>2 Feb, 2022, 12:34</h4>
              <img className={`${styles["product-image"]}`} src='product-img.png'></img>
              <h4 className='l-26 f-600 word-break'>Omega Submariner Sapphire Edition 1998 Watch</h4>
              <div className={`d-flex ${styles["seller-wrapper"]}`}>
                <img src='product-img.png'></img>
                <h4 className='l-26 f-400'>Jacky Morty</h4>
              </div>
              <h4 className='l-26 f-400'>Watch</h4>
              <h4 className='l-26 f-600'>ETH 2.03</h4>
              <div className={`d-flex d-justify-center verified ${styles["status-wrapper"]}`}>
                <h4 className='l-26 f-600'>Verified</h4>
              </div>
              <div className={`${styles["action-wrapper"]}`}>
                <img src='action-icon.svg'></img>
              </div>
            </div>
          </>
        }
        {props.status === "spam" &&
          <>
            <div className={`${styles["booking-table-column"]} d-flex d-align-start`}>
              <h4 className='l-26 f-400'>#6318</h4>
              <h4 className='l-26 f-400'>2 Feb, 2022, 12:34</h4>
              <img className={`${styles["product-image"]}`} src='product-img.png'></img>
              <h4 className='l-26 f-600 word-break'>Omega Submariner Sapphire Edition 1998 Watch</h4>
              <div className={`d-flex ${styles["seller-wrapper"]}`}>
                <img src='product-img.png'></img>
                <h4 className='l-26 f-400'>Jacky Morty</h4>
              </div>
              <h4 className='l-26 f-400'>Watch</h4>
              <h4 className='l-26 f-600'>ETH 2.03</h4>
              <div className={`d-flex d-justify-center spam ${styles["status-wrapper"]}`}>
                <h4 className='l-26 f-600'>Spam</h4>
              </div>
              <div className={`${styles["action-wrapper"]}`}>
                <img src='action-icon.svg'></img>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default UserTable
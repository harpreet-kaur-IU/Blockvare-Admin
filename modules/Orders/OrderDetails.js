import React from 'react'
import styles from '../css/Orders/OrderDetails.module.css'
import Dropdown from '../Dropdown'
import Stepper from './Stepper'

const OrderDetails = () => {
  const statusHandler = (val) =>{
    console.log(val)
  }
  return (
    <div className={`d-flex gap-3 mt-8 ${styles["order-details-wrapper"]}`}>
      {/* left column */}
      <div className={`col-12 col-xl-8 d-flex d-flex-column gap-3`}>
        <div className={`${styles["order-1"]}`}>
          <div className='d-flex d-align-center gap-1'>
            <h5 className='f-400 l-22 text-grey-6'>Order ID:</h5>
            <h5 className='f-600 l-22 text-grey-6'>#272C31</h5>
          </div>
          <div className='d-flex d-justify-space-between mt-4'>
            <div className='d-flex gap-2'>
              <img className={`${styles["product-image"]}`} src='product-img.png'></img>
              <div className='d-flex d-flex-column gap-1'>
                <h4 className='f-600 l-22 text-black'>Omega Submariner Sapphire Edition 1998 Watch</h4>
                <h5 className='f-600 l-22 text-primary'>Verified</h5>
              </div>
            </div>
            <div className='d-flex d-flex-column d-align-end gap-1'>
              <h4 className='f-600 l-22 text-grey-6'>ETH 25.03</h4>
              <h5 className='f-400 l-22 text-grey-6'>2 Feb, 2022, 12:34</h5>
            </div>
          </div>
        </div>

        <div className={`col-12 d-grid grid-col-2 gap-2`}>
          <div className={`d-flex d-flex-column ${styles["buyer-details"]}`}>
            <h6 className='pb-4 pt-4 pl-5 pr-5 f-600 l-22 text-grey-5'>BUYER DETAILS</h6>
            <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-2`}>
              <img className={`${styles["product-image"]}`} src="product-img.png"></img>
              <div className={`d-flex d-flex-column`}>
                <h4 className='f-600 l-22 text-grey-5'>Kristin Watson</h4>
                <h6 className='f-600 l-22 text-primary'>Verified</h6>
              </div>
            </div>

            <div className='d-flex d-flex-column'>
              {/* address details */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Address</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>4140 Parker Rd. Allentown, New Mexico 31134</h4>
              </div>

              {/* contact details */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Contact</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>316 555-0116</h4>
              </div>

              {/* email detail */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Email</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>vuhaithuongnute@gmail.com</h4>
              </div>

              {/* wallet address */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Wallet</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>0x21876114ac93f3691a432347a5bf1badc8f8236f</h4>
              </div>
            </div>
          </div>
          <div className={`d-flex d-flex-column ${styles["buyer-details"]}`}>
            <h6 className='pb-4 pt-4 pl-5 pr-5 f-600 l-22 text-grey-5'>SELLER DETAILS</h6>
            <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-2`}>
              <img className={`${styles["product-image"]}`} src="product-img.png"></img>
              <div className={`d-flex d-flex-column`}>
                <h4 className='f-600 l-22 text-grey-5'>Kristin Watson</h4>
                <h6 className='f-600 l-22 text-primary'>Verified</h6>
              </div>
            </div>

            <div className='d-flex d-flex-column'>
              {/* address details */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Address</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>4140 Parker Rd. Allentown, New Mexico 31134</h4>
              </div>

              {/* contact details */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Contact</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>316 555-0116</h4>
              </div>

              {/* email detail */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Email</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>vuhaithuongnute@gmail.com</h4>
              </div>

              {/* wallet address */}
              <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                <h4 className='col-3 f-400 l-22 text-black'>Wallet</h4>
                <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>0x21876114ac93f3691a432347a5bf1badc8f8236f</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right column */}
      <div className='col-12 col-xl-4'>
        <div className={`p-5 ${styles["delivery-status"]}`}>
          <div className={`d-flex d-align-center gap-2`}>
            <h4 className='f-400 l-22 text-grey-5'>Status:</h4>
            <div className={`col-3 col-xl-4 col-xxl-5 ${styles["dropdown-wrapper"]}`}>
              <Dropdown placeholder="In transit" handler={statusHandler} ulColor="#0492E1" ulBgColor="rgba(4, 146, 225, 0.1)" spanColor="#0492E1" bgColor="rgba(4, 146, 225, 0.1);"></Dropdown>
            </div>
          </div>
          <div className={`mt-8 d-flex`}>
            <div className='col-2 col-xl-3'>
              <Stepper title="5" active="1"></Stepper>
            </div>
            <div className='col-10 col-xl-9 d-flex d-flex-column'>
              <div className='col-10 d-flex d-flex-column gap-1'>
                <h3 className='f-600 l-22 text-black'>Order Placed</h3>
                <h4 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h4>
              </div>
              <div className='col-10 d-flex d-flex-column gap-1 mt-8'>
                <h3 className='f-600 l-22 text-black'>Order picked</h3>
                <h4 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h4>
              </div>
              <div className='col-10 d-flex d-flex-column gap-1 mt-8'>
                <h3 className='f-600 l-22 text-black'>Order packed</h3>
                <h4 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h4>
              </div>
              <div className='col-10 d-flex d-flex-column gap-1 mt-8'>
                <h3 className='f-600 l-22 text-black'>Shipped</h3>
                <h4 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h4>
              </div>
              <div className='col-10 d-flex d-flex-column gap-1 mt-8'>
                <h3 className='f-600 l-22 text-black'>Delivered</h3>
                <h4 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h4>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails
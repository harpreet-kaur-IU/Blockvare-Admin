import React from 'react'
import styles from '../css/Products/ProductDetails.module.css'
import Dropdown from '../Dropdown'

const ProductDetails = () => {
  const statusHandler = (val) =>{
    console.log(val)
  }
  return (
    <div className={`mt-8 d-flex gap-4 ${styles["product-details-wrapper"]}`}>
      <div className={`col-12 col-md-4 col-xl-5 col-xxl-5`}>
        <div className={`d-flex d-align-center d-justify-center ${styles["image-col"]}`}>
          <img src='product.png' alt='product-image'></img>
        </div>
        <div className={`d-flex mt-5 gap-3`}>
          <div className={`d-flex d-align-center d-justify-center ${styles["smaller-view-card"]}`}>
            <img src='product.png'></img>
          </div>
          <div className={`d-flex d-align-center d-justify-center ${styles["smaller-view-card"]}`}>
            <img src='product.png'></img>
          </div>
          <div className={`d-flex d-align-center d-justify-center ${styles["smaller-view-card"]}`}>
            <img src='product.png'></img>
          </div>
        </div>
      </div>
      <div className={`col-12 col-md-8 col-xl-7 col-xxl-7`}>
        <div className={`d-flex d-align-center gap-2`}>
          <h4 className='f-400 l-22 text-grey-5'>Status:</h4> 
          <div className={`col-3 ${styles["dropdown-wrapper"]}`}>
            <Dropdown placeholder="Pending" handler={statusHandler} ulColor="#7157F4" ulBgColor="rgba(113, 87, 244, 0.1)" spanColor="#7157F4" bgColor="rgba(113, 87, 244, 0.1)"></Dropdown>
          </div>
        </div>
        <h2 className='l-40 f-600 text-black mt-4'>2019-20 Panini Prizm Luka Samanic</h2>
        {/* product details */}
        <div className='d-flex d-flex-column gap-2 mt-4'>
          <div className='d-flex d-align-center'>
            <h4 className='col-2 col-md-3 col-xl-4 col-xxl-4 f-400 l-26 text-grey-5'>Buyer:</h4>
            <h4 className='col-10 col-md-9 col-xl-8 col-xxl-8 f-600 l-26 text-black'>Jack Dorsey</h4>
          </div>
          
          <div className='d-flex d-align-center'>
            <h4 className='col-2 col-md-3 col-xl-4 col-xxl-4 f-400 l-22 text-grey-5'>Location:</h4>
            <div className='col-10 col-md-9 col-xl-8 col-xxl-8 d-flex d-align-center gap-1'>
              <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.28438 15.7701C10.221 14.0656 13.6666 10.5834 13.6666 7.38786C13.6666 5.61975 12.9642 3.92406 11.714 2.67381C10.4637 1.42357 8.76804 0.721191 6.99993 0.721191C5.23182 0.721191 3.53612 1.42357 2.28588 2.67381C1.03563 3.92406 0.333252 5.61975 0.333252 7.38786C0.333252 10.5834 3.7777 14.0656 5.71548 15.7701C6.06894 16.0856 6.52615 16.2599 6.99993 16.2599C7.47371 16.2599 7.93092 16.0856 8.28438 15.7701ZM4.7777 7.38786C4.7777 6.79849 5.01183 6.23326 5.42858 5.81651C5.84533 5.39976 6.41056 5.16564 6.99993 5.16564C7.5893 5.16564 8.15453 5.39976 8.57128 5.81651C8.98803 6.23326 9.22216 6.79849 9.22216 7.38786C9.22216 7.97723 8.98803 8.54246 8.57128 8.95921C8.15453 9.37595 7.5893 9.61008 6.99993 9.61008C6.41056 9.61008 5.84533 9.37595 5.42858 8.95921C5.01183 8.54246 4.7777 7.97723 4.7777 7.38786Z" fill="#EB5951"/>
              </svg>
              <h4 className='f-600 l-26 text-black'>New York, United States</h4>
            </div>
          </div>

          <div className='d-flex d-align-center'>
            <h4 className='col-2 col-md-3 col-xl-4 col-xxl-4 f-400 l-22 text-grey-5'>Current price:</h4>
            <h4 className='col-10 col-md-9 col-xl-8 col-xxl-8 f-600 l-26 text-black'>0.002 ETH</h4>
          </div>

          <div className='d-flex d-align-center'>
            <h4 className='col-2 col-md-3 col-xl-4 col-xxl-4 f-400 l-22 text-grey-5'>Category:</h4>
            <h4 className='col-10 col-md-9 col-xl-8 col-xxl-8 f-600 l-26 text-black'>Collectible card</h4>
          </div>

          <div className='d-flex'>
            <h4 className='col-2 col-md-3 col-xl-4 col-xxl-4 f-400 l-22 text-grey-5'>Description:</h4>
            <h4 className='col-10 col-md-9 col-xl-8 col-xxl-8  f-400 l-26 text-grey-5'>
              The Axie marketplace has been moved to Ronin, an Ethereum sidechain.
              Axies are fierce creatures that love to battle, build, and hunt for treasure! Build up a collection and use them across an ever expanding universe of games!
            </h4>
          </div>
        </div>

        {/* product detail table */}
        <div className={`mt-7 ${styles["table"]}`}>
          <div className={`col-12 d-flex bg-main ${styles["table-row"]}`}>
            <div className='col-6'>
              <h4 className='f-400 l-22 text-black'>League</h4>
            </div>
            <div className='col-6'>
              <h4 className='f-400 l-22 text-grey-5'>NBA</h4>
            </div>
          </div>

          <div className={`col-12 d-flex bg-white ${styles["table-row"]}`}>
            <div className='col-6'>
              <h4 className='f-400 l-22 text-black'>League</h4>
            </div>
            <div className='col-6'>
              <h4 className='f-400 l-22 text-grey-5'>NBA</h4>
            </div>
          </div>

          <div className={`col-12 d-flex bg-main ${styles["table-row"]}`}>
            <div className='col-6'>
              <h4 className='f-400 l-22 text-black'>League</h4>
            </div>
            <div className='col-6'>
              <h4 className='f-400 l-22 text-grey-5'>NBA</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
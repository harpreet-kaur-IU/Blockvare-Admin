import React from 'react'
import styles from '../css/Orders/AddOrder.module.css'
import ProductDropdown from '../Products/ProductDropdown'
const AddOrder = () => {
    const productTypeHandler = (val) =>{
        console.log(val)
    }
  return (
    <div className={`mt-8`}>
        <form>
            {/* form heading */}
            <div className={`d-flex d-justify-space-between d-align-center`}>
                <h3 className='f-600 l-28 text-grey-5'>Fill in the details</h3>
                <div className='d-flex d-align-center gap-1'>
                    <div className={`cursor-pointer ${styles["discard-btn"]}`}>
                        <h5 className='f-600 l-22 text-grey-4'>Discard</h5>
                    </div>
                    <button className={`cursor-pointer btn-primary f-600 l-22 h5 ${styles["save-btn"]}`}>Save</button>
                </div>
            </div>

            {/* form details and inputs */}
            <div className='d-flex'>
                {/* left column */}
                <div className={`col-5 col-xl-5 d-flex d-flex-column mt-7 gap-2`}>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Product ID</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Order ID</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Order Price</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Choose Status</label>
                        <ProductDropdown placeholder="Select" handler={productTypeHandler}></ProductDropdown>
                    </div>
                </div>

                {/* right column */}
                <div className={`offset-1 col-6 col-xl-5 d-flex d-flex-column mt-7 gap-2`}>
                    <div className='col-12 d-flex d-flex-column gap-1 mt-4'>
                        <label className='h5 f-600 text-black'>Buyer Details</label>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Buyer User ID</label>
                            <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                        </div>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Buyer Address</label>
                            <textarea className={`text-grey-4 h5 f-400 ${styles["input"]}`}></textarea>
                        </div>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Buyer Contact</label>
                            <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                        </div>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Buyer Connected Wallet</label>
                            <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                        </div>
                    </div>

                    <div className='col-12 d-flex d-flex-column gap-1 mt-4'>
                        <label className='h5 f-600 text-black'>Seller Details</label>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Seller User ID</label>
                            <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                        </div>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Seller Address</label>
                            <textarea className={`text-grey-4 h5 f-400 ${styles["input"]}`}></textarea>
                        </div>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Seller Contact</label>
                            <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                        </div>
                        <div className='col-12 d-flex d-flex-column gap-1'>
                            <label className='h5 f-400 text-black'>Seller Connected Wallet</label>
                            <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddOrder
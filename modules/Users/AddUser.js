import React from 'react'
import FileUploader from '../../icons/FileUploader'
import styles from '../css/Users/AddUser.module.css'
import ProductDropdown from '../Products/ProductDropdown'
const AddUser = () => {
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
                <div className={`col-5 col-lg-5 d-flex d-flex-column mt-7 gap-2`}>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Type of Account</label>
                        <ProductDropdown placeholder="Select" handler={productTypeHandler}></ProductDropdown>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Email</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="email"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Name</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Password</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="password"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Re-enter Password</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="password"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Phone</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Proof of Authenticity</label>
                        <label className='h6 f-400 text-grey-5'>Accepted formats - Image: JPG, PNG; Doc: PDF, DOCX</label>
                        <div className={`col-12 col-xl-8 col-xxl-6 p-relative d-flex gap-1 ${styles["proof-uploader"]}`}>
                            <FileUploader></FileUploader>
                            <div className='d-flex d-flex-column'>
                                <h6 className='f-600 l-22 text-grey-5'>Drag & drop file</h6>
                                <h6 className='f-400 l-22 text-grey-5'>or browse media on your device</h6>
                            </div>
                            <input
                                className='cursor-pointer'
                                type="file"
                            ></input>
                        </div>
                    </div>
                    <div className='col-12 d-flex d-align-center gap-1'>
                        <input type="checkbox"></input>
                        <label className='h5 f-400 text-black'>By signing up you agree to our <span className='f-600'>Terms of Service</span> and <span className='f-600'>Privacy Policy</span>.</label>
                    </div>
                </div>

                {/* right column */}
                <div className={`offset-1 col-6 col-lg-5 d-flex d-flex-column mt-7 gap-2`}>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Profile Picture</label>
                        <label className='h6 f-400 text-grey-5'>Accepted formats - Image: JPG, PNG; Doc: PDF, DOCX</label>
                        <div className={`col-12 col-xl-8 col-xxl-7 p-relative d-flex gap-1 ${styles["proof-uploader"]}`}>
                            <FileUploader></FileUploader>
                            <div className='d-flex d-flex-column'>
                                <h6 className='f-600 l-22 text-grey-5'>Drag & drop file</h6>
                                <h6 className='f-400 l-22 text-grey-5'>or browse media on your device</h6>
                            </div>
                            <input
                                className='cursor-pointer'
                                type="file"
                            ></input>
                        </div>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Profile Canvas</label>
                        <label className='h6 f-400 text-grey-5'>Accepted formats - Image: JPG, PNG; Doc: PDF, DOCX</label>
                        <div className={`col-12 col-xl-8 col-xxl-7 p-relative d-flex gap-1 ${styles["proof-uploader"]}`}>
                            <FileUploader></FileUploader>
                            <div className='d-flex d-flex-column'>
                                <h6 className='f-600 l-22 text-grey-5'>Drag & drop file</h6>
                                <h6 className='f-400 l-22 text-grey-5'>or browse media on your device</h6>
                            </div>
                            <input
                                className='cursor-pointer'
                                type="file"
                            ></input>
                        </div>
                    </div>
                    <div className={`col-12 d-flex d-flex-column gap-1 mt-8`}>
                        <h4 className='f-600 l-22 text-black'>Other Details</h4>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Domain</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Instagram</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Facebook</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Twitter</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddUser
import React from 'react'
import FileUploader from '../../icons/FileUploader'
import styles from '../css/Products/AddProduct.module.css'
import ProductDropdown from './ProductDropdown'
const AddProduct = () => {
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
            <div className='d-flex mt-7'>
                {/* left column */}
                <div className={`col-5 col-sm-5 d-flex d-flex-column gap-2`}>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Type of Product</label>
                        <ProductDropdown placeholder="Select" handler={productTypeHandler}></ProductDropdown>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Title of the product</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Choose Category</label>
                        <ProductDropdown placeholder="Select" handler={productTypeHandler}></ProductDropdown>
                    </div>
                    <div className='col-12 col-lg-9 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Proof of Authenticity</label>
                        <label className='h6 f-400 text-grey-5'>Accepted formats - Image: JPG, PNG; Doc: PDF, DOCX</label>
                        <div className={`p-relative d-flex gap-1 p-5 ${styles["proof-uploader"]}`}>
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
                        <label className='h5 f-400 text-black'>Description of the Product</label>
                        <textarea className={`text-grey-4 h5 f-400 ${styles["input"]}`}></textarea>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Product Location</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Choose Blockchain</label>
                        <ProductDropdown placeholder="Select" handler={productTypeHandler}></ProductDropdown>
                    </div>
                </div>

                {/* right column */}
                <div className={`col-5 offset-1 col-sm-6 d-flex d-flex-column gap-2`}>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Proof of Authenticity</label>
                        <label className='h6 f-400 text-grey-5'>Accepted formats - Image: JPG, PNG; Doc: PDF, DOCX</label>
                        <div className='d-grid grid-col-2 gap-1'>
                            <div className={`p-relative d-flex d-flex-column gap-1 p-5 ${styles["proof-uploader"]}`}>
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
                            <div className={`p-relative d-flex d-flex-column gap-1 p-5 ${styles["proof-uploader"]}`}>
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
                            <div className={`p-relative d-flex d-flex-column gap-1 p-5 ${styles["proof-uploader"]}`}>
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
                            <div className={`p-relative d-flex d-flex-column gap-1 p-5 ${styles["proof-uploader"]}`}>
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
                    </div>
                    <div className={`col-12 d-flex d-flex-column gap-1 mt-8`}>
                        <h4 className='f-600 l-22 text-black'>Other Details</h4>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1 mt-4'>
                        <label className='h5 f-400 text-black'>Product Location</label>
                        <div className='d-flex gap-2'>
                            <div className='d-flex gap-1'>
                                <input className={`${styles["radio-button"]}`} type="radio" name='location'></input>
                                <label className='h5 f-600 l-22 text-grey-5'>None</label>
                            </div>
                            <div className='d-flex gap-1'>
                                <input className={`${styles["radio-button"]}`} type="radio" name='location'></input>
                                <label className='h5 f-600 l-22 text-grey-5'>PSA</label>
                            </div>
                            <div className='d-flex gap-1'>
                                <input className={`${styles["radio-button"]}`} type="radio" name='location'></input>
                                <label className='h5 f-600 l-22 text-grey-5'>Beckett</label>
                            </div>
                            <div className='d-flex gap-1'>
                                <input className={`${styles["radio-button"]}`} type="radio" name='location'></input>
                                <label className='h5 f-600 l-22 text-grey-5'>Other</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Card grade</label>
                        <ProductDropdown placeholder="Select" handler={productTypeHandler}></ProductDropdown>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Card Serial no</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                    <div className='col-12 d-flex d-flex-column gap-1'>
                        <label className='h5 f-400 text-black'>Year manufactured</label>
                        <input className={`text-grey-4 h5 f-400 ${styles["input"]}`} type="text"></input>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddProduct
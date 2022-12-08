import React from 'react'
import styles from '../css/Category/AddCategory.module.css'
const AddCategory = (props) => {
  return (
    <div className={`${styles["wrapper"]}`}>
        <div className={`${styles["padding"]}`}>
            <h3 className='f-600 l-32 text-black'>Name of Category</h3>
            <div className={`mt-4 col-12 d-flex d-align-center gap-2 ${styles["input-wrapper"]}`}>
                <div className={`p-relative d-flex d-align-center ${styles["file-upload-wrapper"]} `}>
                    <svg className='cursor-pointer ' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20Z" fill="#7F8C8D"/>
                    </svg>
                    <input className='p-absolute' type="file"></input>
                </div>
                <input className='h5 l-22 f-400 col-12' type="text" placeholder='e.g. Art, Music.'></input>
            </div>
            <div className={`d-flex d-align-center gap-1 mt-4`}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7217 2.5L18.66 16.25C18.7332 16.3767 18.7717 16.5204 18.7717 16.6667C18.7717 16.8129 18.7332 16.9566 18.66 17.0833C18.5869 17.21 18.4817 17.3152 18.355 17.3884C18.2284 17.4615 18.0847 17.5 17.9384 17.5H2.06171C1.91543 17.5 1.77173 17.4615 1.64505 17.3884C1.51837 17.3152 1.41317 17.21 1.34003 17.0833C1.2669 16.9566 1.22839 16.8129 1.22839 16.6667C1.22839 16.5204 1.2669 16.3767 1.34004 16.25L9.27837 2.5C9.35152 2.37333 9.45671 2.26814 9.58339 2.19501C9.71007 2.12188 9.85377 2.08337 10 2.08337C10.1463 2.08337 10.29 2.12188 10.4167 2.19501C10.5434 2.26814 10.6486 2.37333 10.7217 2.5ZM9.16671 13.3333V15H10.8334V13.3333H9.16671ZM9.16671 7.5V11.6667H10.8334V7.5H9.16671Z" fill="#EB5847"/>
                </svg>
                <h5 className='f-400 l-22 text-red'>Icon must be in PNG, SVG or JPG format</h5>
            </div>
        </div>
        <div className={`mt-7 d-flex d-align-center d-justify-center gap-2 ${styles["buttons-wrapper"]}`}>
            <div onClick={props.handler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["cancel-btn"]}`}>
                <h4 className='f-600 l-22'>Cancel</h4>
            </div>
            <div className={`cursor-pointer d-flex d-align-center d-justify-center btn-primary ${styles["save-btn"]}`}>
                <h4 className='f-600 l-22'>Save</h4>
            </div>
        </div>
    </div>
  )
}

export default AddCategory
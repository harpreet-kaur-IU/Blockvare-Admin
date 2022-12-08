import React, { useState } from 'react'
import styles from '../css/Category/CategoryAll.module.css'
import Shopping from '../../icons/Shopping'
import Edit from '../../icons/Edit'
import Modal from '../Modal'
import AddCategory from './AddCategory'
const CategoryAll = () => {
  const[modal,setModal] = useState(false)
  const addHandler = () =>{
    setModal(prev => !prev)
  }
  return (
    <>
      <div className="mt-8">
        <div className={`d-flex d-align-center d-justify-end gap-2`}>
          <div className={`d-flex d-align-center rounded-16 ${styles['search-wrapper']}`}>
              <img src='search-icon.svg'></img>
              <input className='col-12' type="text" placeholder='Search'/>
          </div>
          <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["filter-icon"]}`}>
            <img src='filter-icon.svg'></img>
          </div>
          <div onClick={addHandler}  className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["add-booking"]}`}>
            <img src='plus-icon.svg'></img>
            <h5 className='f-500 l-22 text-white'>Add new Category</h5>
          </div>
        </div>
        <div className={`mt-8 d-grid grid-col-3 gap-3`}>
          <div className={`d-flex d-align-center d-justify-space-between p-5 ${styles["item-box"]}`}>
            <div className='d-flex d-align-center gap-2'>
              <Shopping></Shopping>
              <h4 className='f-600 l-22 text-grey-6'>3D Art</h4>
            </div>
            <div className={`d-flex ${styles["edit-cat"]}`}>
              <Edit></Edit>
            </div>
          </div>
          <div className={`d-flex d-align-center d-justify-space-between p-5 ${styles["item-box"]}`}>
            <div className='d-flex d-align-center gap-2'>
              <Shopping></Shopping>
              <h4 className='f-600 l-22 text-grey-6'>3D Art</h4>
            </div>
            <div className={`d-flex ${styles["edit-cat"]}`}>
              <Edit></Edit>
            </div>
          </div>
          <div className={`d-flex d-align-center d-justify-space-between p-5 ${styles["item-box"]}`}>
            <div className='d-flex d-align-center gap-2'>
              <Shopping></Shopping>
              <h4 className='f-600 l-22 text-grey-6'>3D Art</h4>
            </div>
            <div className={`d-flex ${styles["edit-cat"]}`}>
              <Edit></Edit>
            </div>
          </div>
          <div className={`d-flex d-align-center d-justify-space-between p-5 ${styles["item-box"]}`}>
            <div className='d-flex d-align-center gap-2'>
              <Shopping></Shopping>
              <h4 className='f-600 l-22 text-grey-6'>3D Art</h4>
            </div>
            <div className={`d-flex ${styles["edit-cat"]}`}>
              <Edit></Edit>
            </div>
          </div>
        </div>
      </div>
      {modal &&
        <Modal modalClass="modal-verify">
          <AddCategory handler={addHandler}></AddCategory>
        </Modal>
      }
    </>
  )
}

export default CategoryAll
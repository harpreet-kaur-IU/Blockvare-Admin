import React, { useState } from 'react'
import styles from './css/SideBar.module.css'
import Close from '../icons/Close'
import Menu from '../icons/Menu'
import { useRouter } from 'next/router'
import Notification from './Notification'
import Modal from './Modal'
const Header = (props) => {
  const [dropdown,setDropdown] = useState(false)
  const router = useRouter();

  //notification states
  const[open,setOpen] = useState(false)

  const profileHandler = () =>{
    router.push("/profile")
  }

  const dropdownHandler = () =>{
    setDropdown(prev => !prev)
  }
  const sideBarHandler = (e) => {
    e.currentTarget.classList.toggle(styles["open"]);
    console.log("Sidebar = "+styles["sidebar-wrapper"]);
    document.querySelector(`#sidebar-wrapper`).classList.toggle(styles["expand"])
    document.querySelector(`#sidebar-wrapper`).classList.toggle(styles["sidebar-wrapper"])
  }

  //notification handler
  const notiClickHandler = () =>{
    setOpen(prev => !prev)
  }

  return (
    <>
      <div className="p-relative header-wrapper">
          <div className={`p-relative d-flex d-align-center d-justify-space-between `}>
            <div role="button" onClick={sideBarHandler} className={`${styles["bar-cross"]}`}>
              <Menu></Menu>
              <Close></Close>
            </div>
          </div>
          <div className={`p-relative d-flex d-align-center d-justify-space-between ${styles["header-height"]}`}>
            <h2 className={`text-black l-32 f-600 `}>{props.title}</h2>
            <div className={`d-flex d-align-center ${styles["noti-profile-wrapper"]}`}>
              <div onClick={notiClickHandler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["header-noti"]}`} >
                <img src='noti-bell.svg'></img>
              </div>
              <div className={`cursor-pointer d-flex d-align-center ${styles["profile-wrapper"]}`}>
                <img className={`${styles["profile-image"]}`} src='profile-img.svg'></img>
                <h5 className='text-black f-400 l-22'>Henry Fiat</h5>
                <img onClick={dropdownHandler} className={`${styles["profile-arrow"]}`} src='down-arrow.svg'></img>
              </div>
            </div>
          </div>
        {/* {dropdown &&
          <div className={`p-absolute ${styles["profile-dropdown"]}`}>
            <div className={`d-flex d-align-center ${styles["doctor-profile-wrapper"]}`}>
              <img className={`${styles["doctor-profile-img"]}`} src='profile-img.png'></img>
              <div className={`d-flex d-flex-column ${styles["profile-name-wrapper"]}`}>
                <h4 className='f-500 l-26'>User Name</h4>
                <span className='text-grey-3 h5 f-400 l-22'>User</span>
              </div>
            </div>

            <div className={`d-flex d-align-center d-justify-space-between ${styles["availability-wrapper"]}`}>
              <span className='text-secondary h5 f-500 l-22'>Availability</span>
              <div className='d-flex d-justify-center'>
                <label className={`${styles["rectangle"]}`}>
                  <input type="checkbox"/> 
                  <span className={`${styles["toggle"]}`}></span>
                </label>
              </div>
            </div>

            <div onClick={profileHandler} className={`cursor-pointer d-flex d-align-center d-justify-space-between ${styles["edit-profile-wrapper"]}`}>
              <div className={`d-flex d-align-center ${styles["user-icon-text"]}`}>
                <img src='user-circle-icon.png'></img>
                <span className='h5'>Edit Profile</span>
              </div>
              <img src='arrow-right.png'></img>
            </div>
            <div className={`d-flex d-align-center d-justify-space-between ${styles["edit-profile-wrapper"]}`}>
              <div className={`d-flex d-align-center ${styles["user-icon-text"]}`}>
                <img src='key-icon.png'></img>
                <span className='h5'>Change password</span> 
              </div>
              <img src='arrow-right.png'></img>
            </div>
            <div className={`d-flex d-align-center d-justify-space-between ${styles["edit-profile-wrapper"]}`}>
              <div className={`d-flex d-align-center ${styles["user-icon-text"]}`}>
                <img src='noti-bell-icon.png'></img>
                <span className='h5'>Notifications</span> 
              </div>
              <img src='arrow-right.png'></img>
            </div>
          </div>
        } */}
      </div>
      {open &&
        <Modal modalClass="modal-verify">
          <Notification handler={notiClickHandler}></Notification>
        </Modal>
      }
    </>

  )
}
export default Header  
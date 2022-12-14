import React from 'react'
import style from './css/SideBar.module.css'
import MenuBar from './MenuBar'
import SiteLogo from './SiteLogo'
const SideBar = () => {
  return (
    <div className={`${style["sidebar-wrapper"]}`} id="sidebar-wrapper">
        <SiteLogo></SiteLogo>
        <MenuBar></MenuBar>
    </div>
  )
}

export default SideBar
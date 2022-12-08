
import React from 'react'
import style from './css/SideBar.module.css'
import MenuItems from './MenuItems'
const MenuBar = () => {
  return (
    <>
      <ul className={`d-flex d-flex-column p-0 m-0 list-style-none gap-1 ${style["menu-bar-wrapper"]}`}>
        <MenuItems title="Dashboard" path="/dashboard" multipath="0"></MenuItems>
        <MenuItems title="Products" path="/product" path1="/product/[id]" path2="/addproduct" multipath="1" haspath1="1" haspath2="1"></MenuItems>
        <MenuItems title="Orders" path="/order" path1="/order/[id]" path2="/addorder" multipath="1" haspath1="1" haspath2="1"></MenuItems>
        <MenuItems title="Users" path="/users" path1="/users/[id]" path2="/adduser" multipath="1" haspath1="1" haspath2="1"></MenuItems>
        <MenuItems title="Categories" path="/categories" multipath="0"></MenuItems>
        <MenuItems title="Reports" path="/reports" multipath="0"></MenuItems>
      </ul>
    </>
  )
}

export default MenuBar
import React from 'react'
import SideBar from '../modules/SideBar'

const Base = (props) => {
  return (
    <div className="d-flex">
        <SideBar></SideBar>
        <main className="main-class">
          {props.children}
        </main>
    </div>
  )
}

export default Base
import React from 'react'
import style from './css/SideBar.module.css'
const SiteLogo = () => {
  return (
    <div className={`${style["site-logo-wrapper"]}`}>
      <h3 className='font-24 l-32 f-600 text-grey-5 secondary-font'>Blockvare</h3>
    </div>
  )
}

export default SiteLogo
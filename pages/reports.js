import React, { Fragment, useState } from 'react'
import Base from '../layout/Base'
import Header from '../modules/Header'
import styles from '../modules/css/Reports.module.css'
import Revenue from '../modules/Revenue'
const reports = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }
  return (
    <Fragment>
        <Base>
            <Header title="Reports"></Header>
            <div className={`${styles["wrapper"]}`}>
                <div className={`d-flex d-align-center d-justify-space-between`}>
                    <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                        <h4 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab1" ? styles["active"] : ""}`}>Revenue</h4>
                        <h4 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab2" ? styles["active"] : ""}`} >Orders</h4>
                        <h4 onClick={handleClick} id="tab3" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab3" ? styles["active"] : ""}`} >Products</h4>
                        <h4 onClick={handleClick} id="tab4" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab4" ? styles["active"] : ""}`} >Users</h4>
                    </div>

                    <div className={`d-flex d-align-center gap-2`}>
                        <div className={`d-flex d-align-center rounded-16 ${styles['search-wrapper']}`}>
                            <img src='search-icon.svg'></img>
                             <input className='col-12' type="text" placeholder='Search'/>
                        </div>
                    </div>
                </div>
                {activeTab === "tab1" && 
                    <Revenue></Revenue>
                }
                {activeTab === "tab2" && 
                    <Revenue></Revenue>
                }
                {activeTab === "tab3" && 
                    <Revenue></Revenue>
                }
                {activeTab === "tab4" && 
                    <Revenue></Revenue>
                }
            </div>
        </Base>
    </Fragment>
  )
}

export default reports
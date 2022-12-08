import React,{useState} from 'react'
import OrderTable from './OrderTable'
import styles from '../css/Orders/OrderList.module.css'
import Modal from '../Modal'
import Filter from '.././Filters/Filter'
import { useRouter } from 'next/router'
const OrderList = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const[filter,setFilter] = useState(false)
  const router = useRouter()

  const handleClick = (e) =>{
    setActiveTab(e.target.id);
  }
  const addHandler = () =>{
    router.push("/addorder")
  }
  const filterHandler = () =>{
    setFilter(prev => !prev)
  }
  return (
    <>
      <div className={`${styles["wrapper"]}`}>
        <div className={`d-flex d-align-center d-justify-space-between`}>
          <div className={`d-flex ${styles["tabs-wrapper"]}`}>
            <h4 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab1" ? styles["active"] : ""} `}>All</h4>
            <h4 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab2" ? styles["active"] : ""}`} >Awaiting</h4>
            <h4 onClick={handleClick} id="tab3" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab3" ? styles["active"] : ""}`} >In transit</h4>
            <h4 onClick={handleClick} id="tab4" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab4" ? styles["active"] : ""}`} >Completed</h4>
            <h4 onClick={handleClick} id="tab5" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab5" ? styles["active"] : ""}`} >Cancelled</h4>
          </div>
          <div className={`d-flex d-align-center gap-2`}>
            <div className={`d-flex d-align-center rounded-16 ${styles['search-wrapper']}`}>
              <img src='search-icon.svg'></img>
              <input className='col-12' type="text" placeholder='Search'/>
            </div>
            <div onClick={filterHandler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["filter-icon"]}`}>
              <img src='filter-icon.svg'></img>
            </div>
            <div onClick={addHandler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["add-booking"]}`}>
              <img src='plus-icon.svg'></img>
              <h5 className='f-500 l-22 text-white'>Add new Order</h5>
            </div>
          </div>
        </div>
        {activeTab === "tab1" && 
          <OrderTable status="all"></OrderTable>
        }
        {activeTab === "tab2" && 
          <OrderTable status="all"></OrderTable>
        }
        {activeTab === "tab3" && 
          <OrderTable status="all"></OrderTable>
        }
        {activeTab === "tab4" && 
          <OrderTable status="all"></OrderTable>
        }
        {activeTab === "tab5" && 
          <OrderTable status="all"></OrderTable>
        }
      </div>
      {filter && 
        <Modal modalClass="modal-verify">
          <Filter handler={filterHandler}></Filter>
        </Modal>
      }
    </>
  )
}

export default OrderList
import { useRouter } from 'next/router';
import React,{useState} from 'react'
import styles from '../css/Users/UserList.module.css'
import UserTable from './UserTable';
const UserList = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const router = useRouter();
  const handleClick = (e) =>{
      setActiveTab(e.target.id);
  }
  const addHandler = () =>{
      router.push("/adduser");
  }
  return (
    <div className={`${styles["wrapper"]}`}>
      <div className={`d-flex d-align-center d-justify-space-between`}>
        <div className={`d-flex ${styles["tabs-wrapper"]}`}>
            <h4 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab1" ? styles["active"] : ""} `}>All</h4>
            <h4 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab2" ? styles["active"] : ""}`} >Pending</h4>
            <h4 onClick={handleClick} id="tab3" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab3" ? styles["active"] : ""}`} >UnVerified</h4>
            <h4 onClick={handleClick} id="tab4" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab4" ? styles["active"] : ""}`} >Verified</h4>
            <h4 onClick={handleClick} id="tab5" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab5" ? styles["active"] : ""}`} >Spam</h4>
        </div>
        <div className={`d-flex d-align-center gap-2`}>
            <div className={`d-flex d-align-center rounded-16 ${styles['search-wrapper']}`}>
                <img src='search-icon.svg'></img>
                <input className='col-12' type="text" placeholder='Search'/>
            </div>
            <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["filter-icon"]}`}>
                <img src='filter-icon.svg'></img>
            </div>
            <div onClick={addHandler}  className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["add-booking"]}`}>
                <img src='plus-icon.svg'></img>
                <h5 className='f-500 l-22 text-white'>Add new User</h5>
            </div>
        </div>
      </div>
      {activeTab === "tab1" && 
        <UserTable status="all"></UserTable>
      }
      {activeTab === "tab2" && 
        <UserTable status="all"></UserTable>
      }
      {activeTab === "tab3" && 
        <UserTable status="all"></UserTable>
      }
      {activeTab === "tab4" && 
        <UserTable status="all"></UserTable>
      }
      {activeTab === "tab5" && 
        <UserTable status="all"></UserTable>
      }
    </div>
  )
}

export default UserList
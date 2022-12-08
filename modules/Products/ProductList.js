import React,{useState} from 'react'
import styles from '../css/Products/Product.module.css'
import ProductTable from './ProductTable';
import Modal from '../Modal'
import Filter from '.././Filters/Filter'
import { useRouter } from 'next/router';
const ProductList = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("tab1");
    const[filter,setFilter] = useState(false)
    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }
    const addHandler = () =>{
        router.push("/addproduct")
    }
    const filterHandler = () =>{
        setFilter(prev => !prev)
    }
  return (
    <>
        <div className={`${styles["wrapper"]}`}>
            <div className={`d-flex d-align-center d-justify-space-between ${styles["tabs-and-search-wrapper"]}`}>
                <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                    <h4 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab1" ? styles["active"] : ""} `}>All</h4>
                    <h4 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab2" ? styles["active"] : ""}`} >Pending</h4>
                    <h4 onClick={handleClick} id="tab3" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab3" ? styles["active"] : ""}`} >Unverified</h4>
                    <h4 onClick={handleClick} id="tab4" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab4" ? styles["active"] : ""}`} >Verified</h4>
                    <h4 onClick={handleClick} id="tab5" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab5" ? styles["active"] : ""}`} >Spam</h4>
                </div>
                <div className={`d-flex d-align-center gap-2`}>
                    <div className={`d-flex d-align-center rounded-16 ${styles['search-wrapper']}`}>
                        <img src='search-icon.svg'></img>
                        <input className='col-12' type="text" placeholder='Search'/>
                    </div>

                    <div onClick={filterHandler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["filter-icon"]}`}>
                        <img src='filter-icon.svg'></img>
                    </div>
                    
                    <div onClick={addHandler}  className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["add-booking"]}`}>
                        <img src='plus-icon.svg'></img>
                        <h5 className='f-500 l-22 text-white'>Add new Product</h5>
                    </div>
                </div>
            </div>
            
            {activeTab === "tab1" && 
                <ProductTable status="all"></ProductTable>
            }
            {activeTab === "tab2" && 
                <ProductTable status="pending"></ProductTable>
            }
            {activeTab === "tab3" && 
                <ProductTable status="unverified"></ProductTable>
            }
            {activeTab === "tab4" && 
                <ProductTable status="verified"></ProductTable>
            }
            {activeTab === "tab5" && 
                <ProductTable status="spam"></ProductTable>
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

export default ProductList
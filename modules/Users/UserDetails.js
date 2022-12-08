import React, { useState } from 'react'
import styles from '../css/Users/UserDetails.module.css'
const UserDetails = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }

  return (
    <div className={`d-flex gap-5 mt-8 ${styles["user-details-wrapper"]}`}>
        <div className='col-12 col-lg-8 gap-5'>
            <div className={`d-flex d-flex-column ${styles["buyer-details"]}`}>
                <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-2`}>
                    <img className={`${styles["product-image"]}`} src="product-img.png"></img>
                    <div className={`d-flex d-flex-column`}>
                        <h4 className='f-600 l-22 text-grey-5'>Kristin Watson</h4>
                        <h6 className='f-600 l-22 text-primary'>Verified</h6>
                    </div>
                </div>

                <div className='d-flex d-flex-column'>
                    {/* address details */}
                    <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                        <h4 className='col-3 f-400 l-22 text-black'>Address</h4>
                        <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>4140 Parker Rd. Allentown, New Mexico 31134</h4>
                    </div>

                    {/* contact details */}
                    <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                        <h4 className='col-3 f-400 l-22 text-black'>Contact</h4>
                        <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>316 555-0116</h4>
                    </div>

                    {/* email detail */}
                    <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                        <h4 className='col-3 f-400 l-22 text-black'>Email</h4>
                        <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>vuhaithuongnute@gmail.com</h4>
                    </div>

                    {/* wallet address */}
                    <div className={`pb-4 pt-4 pl-5 pr-5 d-flex gap-4 ${styles["address-details"]}`}>
                        <h4 className='col-3 f-400 l-22 text-black'>Wallet</h4>
                        <h4 className='col-9 f-400 l-22 text-grey-5 word-break'>0x21876114ac93f3691a432347a5bf1badc8f8236f</h4>
                    </div>
                </div>
            </div>
            <div className={`d-flex d-flex-column d-justify-space-between mt-8`}>
                <div className={`d-flex gap-4`}>
                    <h4 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab1" ? styles["active"] : ""} `}>Created</h4>
                    <h4 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-600 text-grey-4 ${activeTab === "tab2" ? styles["active"] : ""}`} >Owned</h4>
                </div>
                {activeTab === "tab1" &&
                    <div className={`d-grid grid-col-4 mt-3 ${styles["user-cards-grid"]}`}>
                        <div>
                            <div className={`d-flex d-align-center ${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                        <div>
                            <div className={`${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                    </div>
                }
                {activeTab === "tab2" &&
                    <div className={`d-grid grid-col-4 mt-3`}>
                        <div className={`d-flex d-flex-column`}>
                            <div className={`d-flex d-align-center d-justify-center ${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column`}>
                            <div className={`d-flex d-align-center d-justify-center ${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column`}>
                            <div className={`d-flex d-align-center d-justify-center ${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column`}>
                            <div className={`d-flex d-align-center d-justify-center ${styles["product-image-wrapper"]}`}>
                                <img src='product.png'></img>
                            </div>
                            <h5 className='f-600 l-22 text-black'>2019 Panini Optic Basketball Purple Sh...</h5>
                            <div className='d-flex d-align-center d-justify-space-between'>
                                <div className={`d-flex d-align-center ${styles["eth-price-wrapper"]}`}>
                                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 2L0 12.2439L6 15.9024L12 12.2439L6 2ZM0 13.4634L6 22L12 13.4634L6 17.122L0 13.4634Z" fill="#3D7AF5"/>
                                    </svg>
                                    <h5 className='l-22 f-800 text-primary'>0.002</h5>
                                </div>
                                <h5 className='f-600 l-22 text-grey-4'>$ 2,388.5</h5>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
        <div className='col-12 col-lg-4'>
            <div className={`p-5 d-flex d-flex-column ${styles["activity"]}`}>
                <h6 className='f-600 l-22 text-grey-5'>ACTIVITY</h6>
                <div className={`mt-4 d-flex d-flex-column gap-3`}>
                    <div className={`d-flex gap-3`}>
                        <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12492 15.3125C7.87638 15.3115 7.63809 15.2133 7.46086 15.0391L3.08585 10.6641C2.90973 10.488 2.81079 10.2491 2.81079 10C2.81079 9.75097 2.90973 9.5121 3.08585 9.33598C3.26198 9.15986 3.50085 9.06091 3.74992 9.06091C3.99899 9.06091 4.23786 9.15986 4.41398 9.33598L8.12492 13.0469L16.2109 4.96098C16.2981 4.87377 16.4016 4.8046 16.5155 4.7574C16.6295 4.7102 16.7516 4.68591 16.8749 4.68591C16.9982 4.68591 17.1204 4.7102 17.2343 4.7574C17.3482 4.8046 17.4518 4.87377 17.539 4.96098C17.6262 5.04818 17.6954 5.15171 17.7426 5.26565C17.7898 5.37959 17.814 5.50171 17.814 5.62504C17.814 5.74837 17.7898 5.87049 17.7426 5.98443C17.6954 6.09837 17.6262 6.2019 17.539 6.2891L8.78898 15.0391C8.61174 15.2133 8.37346 15.3115 8.12492 15.3125Z" fill="#BDC3C7"/>
                            </svg>
                        </div>
                        <div className={`d-flex d-flex-column gap-1`}>
                            <h4 className='f-600 l-22 text-black'>Ordered 2019 Panini Optic Basketball Purple Lost Diamond card</h4>
                            <h5 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h5>
                        </div>
                    </div>
                    <div className={`d-flex gap-3`}>
                        <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12492 15.3125C7.87638 15.3115 7.63809 15.2133 7.46086 15.0391L3.08585 10.6641C2.90973 10.488 2.81079 10.2491 2.81079 10C2.81079 9.75097 2.90973 9.5121 3.08585 9.33598C3.26198 9.15986 3.50085 9.06091 3.74992 9.06091C3.99899 9.06091 4.23786 9.15986 4.41398 9.33598L8.12492 13.0469L16.2109 4.96098C16.2981 4.87377 16.4016 4.8046 16.5155 4.7574C16.6295 4.7102 16.7516 4.68591 16.8749 4.68591C16.9982 4.68591 17.1204 4.7102 17.2343 4.7574C17.3482 4.8046 17.4518 4.87377 17.539 4.96098C17.6262 5.04818 17.6954 5.15171 17.7426 5.26565C17.7898 5.37959 17.814 5.50171 17.814 5.62504C17.814 5.74837 17.7898 5.87049 17.7426 5.98443C17.6954 6.09837 17.6262 6.2019 17.539 6.2891L8.78898 15.0391C8.61174 15.2133 8.37346 15.3115 8.12492 15.3125Z" fill="#BDC3C7"/>
                            </svg>
                        </div>
                        <div className={`d-flex d-flex-column gap-1`}>
                            <h4 className='f-600 l-22 text-black'>Ordered 2019 Panini Optic Basketball Purple Lost Diamond card</h4>
                            <h5 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h5>
                        </div>
                    </div>
                    <div className={`d-flex gap-3`}>
                        <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12492 15.3125C7.87638 15.3115 7.63809 15.2133 7.46086 15.0391L3.08585 10.6641C2.90973 10.488 2.81079 10.2491 2.81079 10C2.81079 9.75097 2.90973 9.5121 3.08585 9.33598C3.26198 9.15986 3.50085 9.06091 3.74992 9.06091C3.99899 9.06091 4.23786 9.15986 4.41398 9.33598L8.12492 13.0469L16.2109 4.96098C16.2981 4.87377 16.4016 4.8046 16.5155 4.7574C16.6295 4.7102 16.7516 4.68591 16.8749 4.68591C16.9982 4.68591 17.1204 4.7102 17.2343 4.7574C17.3482 4.8046 17.4518 4.87377 17.539 4.96098C17.6262 5.04818 17.6954 5.15171 17.7426 5.26565C17.7898 5.37959 17.814 5.50171 17.814 5.62504C17.814 5.74837 17.7898 5.87049 17.7426 5.98443C17.6954 6.09837 17.6262 6.2019 17.539 6.2891L8.78898 15.0391C8.61174 15.2133 8.37346 15.3115 8.12492 15.3125Z" fill="#BDC3C7"/>
                            </svg>
                        </div>
                        <div className={`d-flex d-flex-column gap-1`}>
                            <h4 className='f-600 l-22 text-black'>Ordered 2019 Panini Optic Basketball Purple Lost Diamond card</h4>
                            <h5 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h5>
                        </div>
                    </div>
                    <div className={`d-flex gap-3`}>
                        <div className={`d-flex d-align-center d-justify-center ${styles["circle"]}`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12492 15.3125C7.87638 15.3115 7.63809 15.2133 7.46086 15.0391L3.08585 10.6641C2.90973 10.488 2.81079 10.2491 2.81079 10C2.81079 9.75097 2.90973 9.5121 3.08585 9.33598C3.26198 9.15986 3.50085 9.06091 3.74992 9.06091C3.99899 9.06091 4.23786 9.15986 4.41398 9.33598L8.12492 13.0469L16.2109 4.96098C16.2981 4.87377 16.4016 4.8046 16.5155 4.7574C16.6295 4.7102 16.7516 4.68591 16.8749 4.68591C16.9982 4.68591 17.1204 4.7102 17.2343 4.7574C17.3482 4.8046 17.4518 4.87377 17.539 4.96098C17.6262 5.04818 17.6954 5.15171 17.7426 5.26565C17.7898 5.37959 17.814 5.50171 17.814 5.62504C17.814 5.74837 17.7898 5.87049 17.7426 5.98443C17.6954 6.09837 17.6262 6.2019 17.539 6.2891L8.78898 15.0391C8.61174 15.2133 8.37346 15.3115 8.12492 15.3125Z" fill="#BDC3C7"/>
                            </svg>
                        </div>
                        <div className={`d-flex d-flex-column gap-1`}>
                            <h4 className='f-600 l-22 text-black'>Ordered 2019 Panini Optic Basketball Purple Lost Diamond card</h4>
                            <h5 className='f-400 l-22 text-grey-5'>2 Feb, 2022, 12:34</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserDetails
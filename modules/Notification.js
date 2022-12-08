import React from 'react'
import styles from './css/Notification.module.css'
const Notification = (props) => {
  return (
    <div className={`${styles["wrapper"]}`}>
        <div className='d-flex d-flex-column'>
            <div className='d-flex d-align-center d-justify-space-between'>
                <h2 className='f-600 l-26 text-grey-6'>Notification</h2>
                <h5 onClick={props.handler} className='cursor-pointer f-600 l-22 text-grey-4'>CLEAR ALL</h5>
            </div>
            <div className='mt-8 d-flex d-flex-column'>
                <h5 className='f-600 l-22'>Today, 2 Feb</h5>
                <div className={`d-flex d-flex-column ${styles["noti-box"]} mt-4`}>
                    <div className='d-flex d-align-center d-justify-space-between'>
                        <h5 className='f-600 l-22 text-grey-5'>New Order</h5>
                        <h6 className='f-600 l-20 text-grey-4'>2 hours ago</h6>
                    </div>
                    <div className='d-flex d-align-center d-justify-space-between mt-2'>
                        <h4 className='f-400 l-22 text-grey-6'>Jade Warden</h4>
                        <h5 className='f-600 l-20 text-grey-6'>ETH 2.09</h5>
                    </div>
                    <div className='d-flex d-align-center d-justify-space-between mt-1'>
                        <h6 className='f-600 l-22 text-grey-4'>Paid with Metamask</h6>
                        <h6 className='f-600 l-20 text-orange'>ON HOLD</h6>
                    </div>
                    <div className='cursor-pointer d-flex d-align-center d-justify-end mt-3'>
                        <div className={`d-flex d-align-center d-justify-center ${styles["view-details"]}`}>
                            <h6 className='f-600 l-20 text-primary'>View details</h6>
                        </div>
                    </div>
                </div>
                <div className={`d-flex d-flex-column ${styles["noti-box"]} mt-4`}>
                    <div className='d-flex d-align-center d-justify-space-between'>
                        <h5 className='f-600 l-22 text-grey-5'>New Order</h5>
                        <h6 className='f-600 l-20 text-grey-4'>2 hours ago</h6>
                    </div>
                    <div className='d-flex d-align-center d-justify-space-between mt-2'>
                        <h4 className='f-400 l-22 text-grey-6'>Jade Warden</h4>
                        <h5 className='f-600 l-20 text-grey-6'>ETH 2.09</h5>
                    </div>
                    <div className='d-flex d-align-center d-justify-space-between mt-1'>
                        <h6 className='f-600 l-22 text-grey-4'>Paid with Metamask</h6>
                        <h6 className='f-600 l-20 text-green'>COMPLETED</h6>
                    </div>
                    <div className='cursor-pointer d-flex d-align-center d-justify-end mt-3'>
                        <div className={`d-flex d-align-center d-justify-center ${styles["view-details"]}`}>
                            <h6 className='f-600 l-20 text-primary'>View details</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification
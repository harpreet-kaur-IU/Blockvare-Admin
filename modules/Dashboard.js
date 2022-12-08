import React,{useState} from 'react'
import styles from './css/Dashboard.module.css'
import Dropdown from './Dropdown'
import dynamic from 'next/dynamic';
const Dashboard = () => {
    const Chart = dynamic(()=>import('react-apexcharts'),{ssr:false});
    
    const statusHandler = (val) =>{
        console.log(val)
    }

    const[chart,setChart] = useState({
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60,]
        }]
    })
  return (
    <div className='d-flex d-flex-column mt-5'>
        {/* dashboard cards */}
        <div className={`d-flex gap-2 ${styles["dashboard-cards-wrapper"]}`}>
            <div className={`d-flex d-flex-column col-12 col-xs-6 col-sm-3 col-lg-2 p-5 bg-card-yellow ${styles["dashboard-cards"]}`}>
                <h2 className='f-600 l-32 text-grey-5'>23</h2>
                <h6 className='f-600 l-22 text-grey-4 mt-1'>Today's visitors</h6>
            </div>
            <div className={`d-flex d-flex-column col-12 col-xs-6 col-sm-3 col-lg-2 p-5 bg-card-pink ${styles["dashboard-cards"]}`}>
                <h2 className='f-600 l-32 text-grey-5'>23</h2>
                <h6 className='f-600 l-22 text-grey-4 mt-1'>Orders today</h6>
            </div>
            <div className={`d-flex d-flex-column col-12 col-xs-6 col-sm-3 col-lg-2 p-5 bg-card-pink ${styles["dashboard-cards"]}`}>
                <h2 className='f-600 l-32 text-grey-5'>23</h2>
                <h6 className='f-600 l-22 text-grey-4 mt-1'>Orders in progress </h6>
            </div>
            <div className={`d-flex d-flex-column col-12 col-xs-6 col-sm-3 col-lg-2 p-5 bg-card-green ${styles["dashboard-cards"]}`}>
                <h2 className='f-600 l-32 text-grey-5'>23</h2>
                <h6 className='f-600 l-22 text-grey-4 mt-1'>Today's sales</h6>
            </div>
            <div className={`d-flex d-flex-column col-12 col-xs-6 col-sm-3 col-lg-2 p-5 bg-card-green ${styles["dashboard-cards"]}`}>
                <h2 className='f-600 l-32 text-grey-5'>23</h2>
                <h6 className='f-600 l-22 text-grey-4 mt-1'>Week's sales</h6>
            </div>
            <div className={`d-flex d-flex-column col-12 col-xs-6 col-sm-3 col-lg-2 p-5 bg-card-green ${styles["dashboard-cards"]}`}>
                <h2 className='f-600 l-32 text-grey-5'>23</h2>
                <h6 className='f-600 l-22 text-grey-4 mt-1'>Month's sales</h6>
            </div>
        </div>

        {/* vistors frequency */}
        <div className={`d-flex gap-5 ${styles["visitor-freq-wrapper"]}`}>
            <div className={`p-5 col-12 col-lg-4 mt-8 ${styles["vistor-freq"]}`}>
                <div className='d-flex d-align-center d-justify-space-between'>
                    <h3 className='l-22 f-600 text-grey-6'>Vistors Frequency</h3>
                    <h4 className='l-22 f-600 text-yellow'>Average</h4>
                </div>
            </div>
            <div className={`p-5 d-flex d-flex-column col-12 col-lg-8 mt-8 ${styles["vistor-freq"]}`}>
                <div className={`d-flex d-align-center d-justify-space-between ${styles["graph-header-wrapper"]}`}>
                    <h3 className='l-22 f-600 text-grey-6'>Sales</h3>
                    <div className={`col-8 col-xs-6 col-sm-3 d-flex d-align-center ${styles["filter-wrapper"]}`}>
                        <h5 className='col-12 f-400 l-22 text-grey-6'>Sort by :</h5>
                        <Dropdown placeholder="Daily" handler={statusHandler} ulColor="#0492E1" ulBgColor="rgba(4, 146, 225, 0.1)" spanColor="#0492E1" bgColor="rgba(4, 146, 225, 0.1);"></Dropdown>
                    </div>
                </div>
                <Chart options={chart.options} series={chart.series} height="300" type="bar"  />
            </div>
        </div>

        {/* top sellers */}
        <div className={`d-grid grid-col-3 gap-5 mt-8  ${styles["top-seller-buyer-wrapper"]}`}>
            <div className={`p-5 ${styles["vistor-freq"]}`}>
                <h3 className='l-22 f-600 text-grey-6'>Top Seller</h3>
                <div className='d-flex d-flex-column gap-3 mt-4'>
                    <div className='d-flex d-align-start gap-2'>
                        <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                        <img src='product-img.png' className={`${styles["seller-image"]}`}></img>
                        <div className='d-flex d-flex-column gap-1'>
                            <h3 className='f-400 l-22 text-grey-6'>Mrit Sanma</h3>
                            <h6 className='f-600 l-22 text-grey-4'>37 products</h6>
                        </div>
                    </div>
                    <div className='d-flex d-align-start gap-2'>
                        <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                        <img src='product-img.png' className={`${styles["seller-image"]}`}></img>
                        <div className='d-flex d-flex-column gap-1'>
                            <h3 className='f-400 l-22 text-grey-6'>Mrit Sanma</h3>
                            <h6 className='f-600 l-22 text-grey-4'>37 products</h6>
                        </div>
                    </div>
                    <div className='d-flex d-align-start gap-2'>
                        <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                        <img src='product-img.png' className={`${styles["seller-image"]}`}></img>
                        <div className='d-flex d-flex-column gap-1'>
                            <h3 className='f-400 l-22 text-grey-6'>Mrit Sanma</h3>
                            <h6 className='f-600 l-22 text-grey-4'>37 products</h6>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={`p-5 ${styles["vistor-freq"]}`}>
                <h3 className='l-22 f-600 text-grey-6'>Top Buyer</h3>
                <div className='d-flex d-flex-column gap-3 mt-4'>
                    <div className='d-flex d-align-start gap-2'>
                        <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                        <img src='product-img.png' className={`${styles["seller-image"]}`}></img>
                        <div className='d-flex d-flex-column gap-1'>
                            <h3 className='f-400 l-22 text-grey-6'>Mrit Sanma</h3>
                            <h6 className='f-600 l-22 text-grey-4'>37 products</h6>
                        </div>
                    </div>
                    <div className='d-flex d-align-start gap-2'>
                        <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                        <img src='product-img.png' className={`${styles["seller-image"]}`}></img>
                        <div className='d-flex d-flex-column gap-1'>
                            <h3 className='f-400 l-22 text-grey-6'>Mrit Sanma</h3>
                            <h6 className='f-600 l-22 text-grey-4'>37 products</h6>
                        </div>
                    </div>
                    <div className='d-flex d-align-start gap-2'>
                        <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                        <img src='product-img.png' className={`${styles["seller-image"]}`}></img>
                        <div className='d-flex d-flex-column gap-1'>
                            <h3 className='f-400 l-22 text-grey-6'>Mrit Sanma</h3>
                            <h6 className='f-600 l-22 text-grey-4'>37 products</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`p-5 ${styles["vistor-freq"]}`}>
                <h3 className='l-22 f-600 text-grey-6'>Popular Brands</h3>
                <div className='d-flex d-flex-column gap-1 mt-4'>
                    <div className='d-flex d-align-start d-justify-space-between gap-2'>
                        <div className='d-flex gap-1'>
                            <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                            <h3 className='f-600 l-22 text-grey-6'>Mrit Sanma</h3>
                        </div>
                        <h4 className='f-600 l-22 text-primary'>112</h4>
                    </div>
                    <div className='d-flex d-align-start d-justify-space-between gap-2'>
                        <div className='d-flex gap-1'>
                            <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                            <h3 className='f-600 l-22 text-grey-6'>Mrit Sanma</h3>
                        </div>
                        <h4 className='f-600 l-22 text-primary'>112</h4>
                    </div>
                    <div className='d-flex d-align-start d-justify-space-between gap-2'>
                        <div className='d-flex gap-1'>
                            <h4 className='f-400 l-22 text-grey-4'>1.</h4>
                            <h3 className='f-600 l-22 text-grey-6'>Mrit Sanma</h3>
                        </div>
                        <h4 className='f-600 l-22 text-primary'>112</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
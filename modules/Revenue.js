import React,{useState} from 'react'
import styles from './css/Reports.module.css'
import Dropdown from './Dropdown'
import dynamic from 'next/dynamic';
const Revenue = () => {
    const Chart = dynamic(()=>import('react-apexcharts'),{ssr:false});
    const rangeHandler = (val) =>{
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
    <div className={`mt-8 d-flex d-flex-column ${styles["table-wrapper"]}`}>
        <div className={`d-flex d-align-center d-justify-space-between ${styles["first-column"]}`}>
            <h4 className='l-22 f-400 text-grey-4'>Overview</h4>
            <div className='col-4 d-flex gap-2'>
                <div className='col-6 d-flex d-align-center'>
                    <h5 className='col-8 f-400 l-22 text-grey-5'>Date range:</h5>
                    <Dropdown placeholder="Daily" handler={rangeHandler} ulColor="#7F8C8D" ulBgColor="#ECF0F1" spanColor="#7F8C8D" bgColor="#ECF0F1"></Dropdown>
                </div>
                <div className='col-6 d-flex d-align-center'>
                    <h5 className='col-4 f-400 l-22 text-grey-5'>Sort:</h5>
                    <Dropdown placeholder="Daily" handler={rangeHandler} ulColor="#7F8C8D" ulBgColor="#ECF0F1" spanColor="#7F8C8D" bgColor="#ECF0F1"></Dropdown>
                </div>
            </div>      
        </div>

        <div className={`d-grid grid-col-4 ${styles["second-column"]}`}>
            <div className={`d-flex d-flex-column ${styles["grid-col-1"]} ${styles["active-card"]} `}>
                <h5 className='text-grey-4 f-600 l-22'>Gross sales</h5>
                <h3 className='f-600 l-32 text-grey-5'>$ 23,345</h3>
            </div>
            <div className={`d-flex d-flex-column ${styles["grid-col-1"]}`}>
                <h5 className='text-grey-4 f-600 l-22'>Gross sales</h5>
                <h3 className='f-600 l-32 text-grey-5'>$ 23,345</h3>
            </div>
            <div className={`d-flex d-flex-column ${styles["grid-col-1"]}`}>
                <h5 className='text-grey-4 f-600 l-22'>Gross sales</h5>
                <h3 className='f-600 l-32 text-grey-5'>$ 23,345</h3>
            </div>
            <div className={`d-flex d-flex-column ${styles["grid-col-4"]}`}>
                <h5 className='text-grey-4 f-600 l-22'>Gross sales</h5>
                <h3 className='f-600 l-32 text-grey-5'>$ 23,345</h3>
            </div>
        </div>

        <div className={`d-flex d-flex-column gap-3 ${styles["third-column"]}`}>
            <div className='d-flex d-align-center d-justify-space-between'>
                <h5 className='f-600 l-22 text-grey-4'>Sales</h5>
                <div className='col-3 d-flex gap-2'>
                    <div className='col-8 d-flex d-align-center'>
                        <h5 className='col-8 f-400 l-22 text-grey-5'>Compare:</h5>
                        <Dropdown placeholder="Daily" handler={rangeHandler} ulColor="#7F8C8D" ulBgColor="#ECF0F1" spanColor="#7F8C8D" bgColor="#ECF0F1"></Dropdown>
                    </div>
                </div>
            </div>
            <Chart options={chart.options} series={chart.series} height="300" type="line"  />
        </div>
    </div>
  )
}

export default Revenue
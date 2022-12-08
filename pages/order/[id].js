import React, { Fragment } from 'react'
import Base from '../../layout/Base'
import Header from '../../modules/Header'
import OrderDetails from '../../modules/Orders/OrderDetails'

const orderdetails = () => {
  return (
    <Fragment>
      <Base>
        <Header title="Order Details"></Header>
        <OrderDetails></OrderDetails>
      </Base>
    </Fragment>
  )
}

export default orderdetails
import React, { Fragment } from 'react'
import Base from '../../layout/Base'
import Header from '../../modules/Header'
import OrderList from '../../modules/Orders/OrderList'

const order = () => {
  return (
    <Fragment>
      <Base>
        <Header title="Orders"></Header>
        <OrderList></OrderList>
      </Base>
    </Fragment>
  )
}

export default order
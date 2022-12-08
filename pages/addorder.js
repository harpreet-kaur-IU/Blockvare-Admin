import React, { Fragment } from 'react'
import Base from '../layout/Base'
import AddOrder from '../modules/Orders/AddOrder'

const addorder = () => {
  return (
    <Fragment>
        <Base>
            <AddOrder></AddOrder>
        </Base>
    </Fragment>
  )
}

export default addorder
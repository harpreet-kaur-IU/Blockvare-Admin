import React, { Fragment } from 'react'
import AddProduct from '../modules/Products/AddProduct'
import Header from '../modules/Header'
import Base from '../layout/Base'
const addpro = () => {
  return (
    <Fragment>
        <Base>
            <Header title="Add Product"></Header>
            <AddProduct></AddProduct>
        </Base>
    </Fragment>
  )
}

export default addpro
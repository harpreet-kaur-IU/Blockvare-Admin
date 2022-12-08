import React, { Fragment } from 'react'
import Base from '../../layout/Base'
import Header from '../../modules/Header'
import ProductDetails from '../../modules/Products/ProductDetails'

const productid = () => {
  return (
    <Fragment>
        <Base>
            <Header title="Product details"></Header>
            <ProductDetails></ProductDetails>
        </Base>
    </Fragment>
  )
}

export default productid
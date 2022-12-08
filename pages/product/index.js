import React, { Fragment } from 'react'
import Base from '../../layout/Base'
import Header from '../../modules/Header'
import ProductList from '../../modules/Products/ProductList'

const productindex = () => {
  return (
    <Fragment>
      <Base>
        <Header title="Products"></Header>
        <ProductList></ProductList>
      </Base>
    </Fragment>
  )
}

export default productindex
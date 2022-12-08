import React, { Fragment } from 'react'
import Base from "../layout/Base";
import Header from "../modules/Header";
import CategoryAll from '../modules/Category/CategoryAll'

const categories = () => {
  return (
    <Fragment>
        <Base>
            <Header title="Categories"></Header>
            <CategoryAll></CategoryAll>
        </Base>
    </Fragment>
  )
}

export default categories
import React, { Fragment } from 'react'
import Base from '../../layout/Base'
import Header from '../../modules/Header'
import UserDetails from '../../modules/Users/UserDetails'
const userdetail = () => {
  return (
    <Fragment>
        <Base>
          <Header title="User Details"></Header>
          <UserDetails></UserDetails>
        </Base>
    </Fragment>
  )
}

export default userdetail
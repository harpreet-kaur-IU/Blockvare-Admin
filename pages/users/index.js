import React, { Fragment } from 'react'
import Base from '../../layout/Base'
import Header from '../../modules/Header'
import UserList from '../../modules/Users/UserList'
const userindex = () => {
  return (
    <Fragment>
        <Base>
            <Header title="Users"></Header>
            <UserList></UserList>
        </Base>
    </Fragment>
  )
}

export default userindex
import React, { Fragment } from 'react'
import AddUser from '../modules/Users/AddUser'
import Header from '../modules/Header'
import Base from '../layout/Base'
const adduser = () => {
    return (
        <Fragment>
            <Base>
                <Header title="Add Product"></Header>
                <AddUser></AddUser>
            </Base>
        </Fragment>
    )
}

export default adduser
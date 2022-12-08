import { Fragment } from "react";
import Base from "../layout/Base";
import Dashboard from "../modules/Dashboard";
import Header from "../modules/Header";

const dashboard = () => {
    return (
        <Fragment>
          <Base>
            <Header title="Dashboard"></Header>
            <Dashboard></Dashboard>
          </Base>
        </Fragment>
      )
}

export default dashboard
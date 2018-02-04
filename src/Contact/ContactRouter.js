import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ContactContainer from "./ContactContainer";


const CompanyRouter = (
  <Switch>
    <Route exact path="/Contact" component={ContactContainer}>
      {/* <Route path="/viewCompany" component={CompanyView} /> */}
    </Route>
  </Switch>
)

export default CompanyRouter
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CompanyContainer from "./CompanyContainer";
import CompanyView from './CompanyView'

const CompanyRouter = (
  <Switch>
    <Route exact path="/Company" component={CompanyContainer} />
    <Route exact path="/Company/viewCompany" component={CompanyView} />
  </Switch>
  );
   
  export default CompanyRouter
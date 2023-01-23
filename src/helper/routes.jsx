import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import { history } from './helpers/history';
import RegistrationForm from "../components/RegistrationForm/registrationForm";
import RouteGuard from "../components/RouteGuard";
 
const Routes = () => {
   return (
       <Router history={history}>
           <Switch>
               <Route
                   path="/login"
                   component={RegistrationForm}
               />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes
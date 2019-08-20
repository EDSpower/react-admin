import React from 'react';
import { BrowserRouter as Router , Switch , Route , Redirect } from 'react-router-dom';
import App from '../App';
import Login from '@/views/Login';

const BaseRoute = () => (  
  <Router >
    <Switch>
     <Route exact path="/login" component={ Login }></Route>
     <Route path="/" render={ () => (
      window.localStorage.getItem('djb_token') ? (<App/>) : (<Redirect to="/login" />)
     )}/>
    </Switch>
  </Router>
);

export default BaseRoute;
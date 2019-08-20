import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route , Switch } from 'react-router-dom';
import CorePage from '@/views/corePage';
import LoginData from '@/views/loginData';

class contentBox extends React.Component{
  render(h) {
    return (
      <div className="content-container" style={{height: '100%'}}>
        <Switch>
          <Route exact path="/" component={ CorePage }></Route>
          <Route exact path="/logindata" component={ LoginData }></Route>
        </Switch>
      </div>
    )
  }
}

export default withRouter(contentBox);
import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Page404 from './Page404';
import LoginForm from './login/LoginForm';
import Dashboard from './dashboard/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import PrivateRoute from '../routes/privateRoute';for private login route
// import PublicRoute from '../routes/publicRoute';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <div className={"App"}>
        <Router>
          <div>
            <Switch>
              <Route exact path={"/"} component={LoginForm}/>
              <Route path={"/asanshahr"} component={Dashboard}/>
              <Route component={Page404}/>
            </Switch>
          </div>
        </Router>
      </div>
     </MuiThemeProvider>
    )
  }
}

export default App;

import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
}
from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MyComponent from './components/MyComponent';
import MyComponent01 from './components/MyComponent01';
import MyComponent02 from './components/MyComponent02';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordVerification from './components/auth/ForgotPasswordVerification';
import ChangePassword from './components/auth/ChangePassword';
import ChangePasswordConfirm from './components/auth/ChangePasswordConfirm';
import Welcome from './components/auth/Welcome';
import Footer from './components/Footer';
import { Auth } from 'aws-amplify';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      user: null
      //,
      //loginstatus: "NOT_LOGGED_IN"
    }


    this.setAuthStatus = authenticated => {
      this.setState({ isAuthenticated: authenticated });
    }

    this.setUser = user => {
      this.setState({ user: user });
    }
  //  this.setLogInStatus = loginstatus => {
  //    this.setState({ loginstatus: "not logged in" });
  //  }

  }

  async componentDidMount() {
    try {
      const session = await Auth.currentSession();
      this.setAuthStatus(true);
      this.setState({ isAuthenticating: false });
      console.log(session);
      const user = await Auth.currentAuthenticatedUser();
      this.setUser(user);
    }
    catch (error) {
      console.log(error);
    }

  }

  render() {


    const authProps = {
      isAuthenticated: this.state.isAuthenticated,
      user: this.state.user,
      setAuthStatus: this.setAuthStatus,
      setUser: this.setUser
      //,
   //   loginstatus: this.setLogInStatus
    }

    console.log("HERE (App)...this.state.loginstatus")
    //console.log(this.state.loginstatus)

    return (
      <div className="App">
      <Router>
          <div>
             <Switch>
                 <Route 
                       exact
                       path="/" 
                       render={props => (
                           <Home {...props} auth={authProps}  />
                      )}
                  />
                  <Route 
                    exact
                    path="/login" 
                    render={props => (
                      <LogIn {...props} auth={authProps}  /> 
                    )}
                   />
            <Route 
                    exact
                    path="/register" 
                    render={props => (
                      <Register {...props} auth={authProps}  /> 
                    
                    )}
                    />
       <Route 
                    exact
                    path="/mycomponent" 
                    render={props => (
                      <MyComponent {...props} auth={authProps}  /> 
                    
                    )}
                    />
      <Route 
                    exact
                    path="/mycomponent01" 
                    render={props => (
                      <MyComponent01 {...props} auth={authProps}  /> 
                    
                    )}
                    />
     <Route 
                    exact
                    path="/mycomponent02" 
                    render={props => (
                      <MyComponent02 {...props} auth={authProps}  /> 
                    
                    )}
                    />
           <Route 
                    exact
                    path="/forgotpassword" 
                    render={props => (
                      <ForgotPassword {...props} auth={authProps}  /> 
                    
                    )}
                    />
          <Route 
                    exact
                    path="/forgotpasswordverification" 
                    render={props => (
                      <ForgotPasswordVerification {...props} auth={authProps}  /> 
                    
                    )}
                    />
          <Route 
                    exact
                    path="/changepassword" 
                    render={props => (
                      <ChangePassword {...props} auth={authProps}  /> 
                    
                    )}
                    />
          <Route 
                    exact
                    path="/changepasswordconfirmation" 
                    render={props => (
                      <ChangePasswordConfirm {...props} auth={authProps}  /> 
                    
                    )}
                    />
         <Route 
                    exact
                    path="/welcome" 
                    render={props => (
                      <Welcome {...props} auth={authProps}  /> 
                    
                    )}
                     />
            </Switch>
            <Footer />
          </div>
        </Router>
        </div>
    );

  }
}

export default App;

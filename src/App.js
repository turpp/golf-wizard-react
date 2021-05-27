import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './generalComp/Home'
import Footer from './generalComp/Footer'
import Navbar from './generalComp/Navbar'
import Login from './generalComp/Login'
import Signup from './generalComp/Signup'


class App extends React.Component{

  render(){
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path ='/' component={Home}/>
            <Route exact path ='/login' component={Login}/>
            <Route exact path ='/signup' component={Signup}/>
          </Switch>
      </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;

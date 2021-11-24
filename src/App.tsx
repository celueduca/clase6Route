import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import './App.css';
import ConfigPage from './private/ConfigPage';
import PrivateRoute from './components/PrivateRoute';
import NoFound from './pages/NoFound';

const NoFoundRedirect = () => (<Redirect to="/not-found" />)

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <PrivateRoute path="/config" component={ConfigPage}></PrivateRoute>
        <Route component={NoFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
// import App from './container/App.js'
import './index.css';

import App from "./container/App.js";
import Home from "./component/Home/index.js";
import About from "./component/About/index.js";
import Person from "./component/Person/index.js";

import {Router,Route,hashHistory,IndexRedirect } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={App}>
            <IndexRedirect to="Home" />
            <Route path="Home" component={Home}/>
            <Route path="About" component={About}/>
            <Route path="Person" component={Person}/>
      </Route>
  </Router>,
  document.getElementById('root')
);

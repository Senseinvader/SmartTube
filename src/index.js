import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
    <Route exact path='/' component={App} />
  </BrowserRouter>, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './components/App'
import Page2 from './components/Page2'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Page2" component={Page2} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './header';
import Index from '../pages';
import Welcome from '../pages/welcome';

export default () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Index}/>
      <Route path="/welcome" component={Welcome}/>
    </div>
  </Router>
);
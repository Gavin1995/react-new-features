import React from 'react';
import { render } from 'react-dom';

import Root from './components/root';

render(
  <Root />,
  document.getElementById('content')
);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    const AppRoot = require('./components/root').default;
    render(
      <AppRoot />,
      document.getElementById('content')
    );
  });
}


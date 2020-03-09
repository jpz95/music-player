import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // TODO create shallow render (with enzyme?)
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

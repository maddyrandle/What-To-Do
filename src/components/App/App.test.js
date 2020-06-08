import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { render, fireEvent, waitFor, screen } from '@testing-library/react';


it('renders without crashing', () => {
  const main = document.createElement('main');
  ReactDOM.render(<App />, main);
  ReactDOM.unmountComponentAtNode(main);
});

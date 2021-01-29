import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './css/component.main.css';

import App from './App';

// zu BrowserRouter basename={'/build'}

ReactDOM.render(
  <BrowserRouter > 
  <App />
  </BrowserRouter>, document.getElementById('root'));
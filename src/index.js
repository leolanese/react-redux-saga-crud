import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

const protocol = 'http';
const domain = 'rem-rest-apo.herokuapp.com';
const pathApi = '/api';
const pathUsers = '/users'
const url = protocol + domain + pathApi;

axios.defaults
  .withCredentials = true;
axios.defaults
  .baseURL = url;


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

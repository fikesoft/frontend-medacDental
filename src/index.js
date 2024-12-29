import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css'

import { App } from './components/body/App.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>
            <App/>
      </BrowserRouter>
);




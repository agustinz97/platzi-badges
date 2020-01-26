import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

import './global.css';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.querySelector('#root');

ReactDOM.render(<App/>,container);


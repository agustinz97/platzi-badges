import React from 'react';
import ReactDOM from 'react-dom';

import NewBadge from './components/NewBadge/NewBadge';

import './global.css';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.querySelector('#root');

ReactDOM.render(<NewBadge/>,container);


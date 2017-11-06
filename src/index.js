import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

require('es6-promise').polyfill();

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

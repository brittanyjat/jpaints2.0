import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/main.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter> , document.getElementById('root'));

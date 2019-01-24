import React from 'react';
import { render } from 'react-dom';
import './assets/sass/main.scss';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';

const target = document.querySelector('#root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

render (
    <App />,
    target
);
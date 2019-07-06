import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SaveAttendance from './SaveAttendance';
import ShowAttendance from './ShowAttendance'
import Heading from './heading'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Heading />, document.getElementById('heading'));
ReactDOM.render(<SaveAttendance />, document.getElementById('save-attendance'));
ReactDOM.render(<ShowAttendance />, document.getElementById('show-attendance'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

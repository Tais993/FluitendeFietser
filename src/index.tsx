import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header'
import reportWebVitals from './reportWebVitals';

interface IUser {
    firstName: string,
    lastName: string
}

class User implements IUser {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


function formatName(userArg: IUser) {
    return userArg.firstName + ' ' + userArg.lastName;
}

const userHarper = new User('Harper', 'Perez');

const element = (
    <Header SelectedItem="Home"/>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

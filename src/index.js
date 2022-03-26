//Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const App = () => {
    return <div>Hello Old Sport!</div>;
};

//Render the React Component on the Browser 
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
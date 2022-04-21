import React from 'react';
import ReactDOM from 'react-dom'; 
import Hello from './App.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* I'm passing in the data that I want my component to use.
    I'm passing it in where the component is RENDERED. */}
    <Hello name={"Najee"} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


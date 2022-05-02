import React from "react";
// import ReactDOM from "react-dom";
import * as ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
// ....... Old Version of Render Function ................

// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// )

// ............ New Version of Render function ............ 
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
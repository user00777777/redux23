// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
// import { BrowserRouter   } from "react-router-dom";
// import App from './App'
// import './index.css'
// import store from './store';
// import ReactGA from 'react-ga4';
// ReactDOM.createRoot(document.getElementById('root') ).render(
//  <Provider store={store}>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
//     </Provider>
  
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import store from './store';
import ReactGA from 'react-ga4';

// Инициализация Google Analytics с вашим Measurement ID
ReactGA.initialize('G-9YD5BYKMCS');

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

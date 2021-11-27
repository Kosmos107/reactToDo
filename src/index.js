import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import store from "./redux/store"
import {Provider} from "react-redux"
import {applyMiddleware} from "redux"

console.log(applyMiddleware)

ReactDOM.render(
    <React.StrictMode>
       <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter >
        </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);




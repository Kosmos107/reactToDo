import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { TodoState } from './context/todo/TodoState';



ReactDOM.render(
  
    <React.StrictMode>
      <TodoState>
       <BrowserRouter>
          <App />
        </BrowserRouter >
      </TodoState>
    </React.StrictMode>,
  document.getElementById('root')
);




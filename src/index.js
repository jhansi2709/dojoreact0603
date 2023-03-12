import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Login from './components/Login/Login';

import PostDisplay from './components/PostDisplay';
import CommentsDisplay from './components/CommentsDisplay';
import Navbar from './components/Navbar/Navbar';
import store from './store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
                <React.StrictMode>
                  <Provider store={store}>
                    <App />

                    </Provider>
                </React.StrictMode>
);

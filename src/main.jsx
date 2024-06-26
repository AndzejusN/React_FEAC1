import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/css/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
)

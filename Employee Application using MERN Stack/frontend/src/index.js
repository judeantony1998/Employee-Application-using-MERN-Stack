import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional, for global styles
import App from './App'; // Main App component
import { AuthProvider } from './contexts/AuthContext'; // Auth Context provider
import { BrowserRouter as Router } from 'react-router-dom'; // For routing

// Rendering the application
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

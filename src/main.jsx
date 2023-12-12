import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TypingProvider } from './contexts/TypingProvider.jsx'
import { DeadlineProvider } from './contexts/DeadlineProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TypingProvider>
      <DeadlineProvider>
        <App />
      </DeadlineProvider>
    </TypingProvider>
  // </React.StrictMode>,
)

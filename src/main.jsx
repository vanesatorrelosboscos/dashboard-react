import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './output.css'
import App from './components/App.jsx'
import { ToastProvider } from './context/ToastContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
        <App />
    </ToastProvider>
  </StrictMode>,
)

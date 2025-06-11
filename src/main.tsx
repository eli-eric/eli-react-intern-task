import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'

// info about strict mode: https://react.dev/reference/react/StrictMode

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

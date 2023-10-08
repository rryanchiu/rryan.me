import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index.tsx'
import './index.css'
import 'virtual:uno.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)

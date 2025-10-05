import App from './app'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './global.css'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

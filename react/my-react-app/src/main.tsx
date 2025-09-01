import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Practice from './Practice.tsx'
import { BrowserRouter } from 'react-router-dom'
// import TEST from './test/App1.tsx'
// import './test/default.css'

createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      {/* <App /> */}
      <Practice />
      {/* <TEST /> */}
    </BrowserRouter>
  </>
)

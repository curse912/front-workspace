import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import MenuList from './pages/1.MenuList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Header/>
      <section id="content">
          <div id="menu-container" className='text-center'>
            <Routes>
              <Route path="/menus">
                <Route path='' element={<MenuList/>}>
                </Route>
              </Route>
            </Routes>
          </div>
      </section>
    </div>
  )
}

export default App

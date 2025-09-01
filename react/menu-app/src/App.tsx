import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import MenuList from './pages/1.MenuList'
import { MenuDetail } from './pages/2. MenuDetail'
import MenuInput from './pages/3.MenuInsert'
import MenuEdit from './pages/4.MenuEdit'
import Login from './pages/login/Login'
import ProtectedRoute from './components/ProtectedRoute'
import { api } from './api/menuApi'
import { useDispatch } from 'react-redux'
import { loginSuccess, logout } from './features/authSlice'
import OAuth2Success from './pages/login/OAuth2Success'

function App() {
  
  const dispath = useDispatch();

  useEffect(() => {
    api.post("/auth/refresh")
    .then( res => {
      dispath(loginSuccess(res.data));
    })
    .catch(err => {
      dispath(logout());
    })
  },[])

  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Header/>
      <section id="content">
          <div id="menu-container" className='text-center'>
            <Routes>
              {/* 
                라우트 설정
                1. 로그인을 한 유저만 보이는 컴포넌트 설정
                2. 권한이 존재하는 경우만 보이는 컴포넌트 설정
              */}
              <Route path="/menus">
                <Route path='' element={<MenuList/>} />
                <Route path=':id' element={<MenuDetail/>} />
                <Route path='new' element={
                  <ProtectedRoute>
                    <MenuInput/>
                  </ProtectedRoute>
                  } />
                <Route path=":id/edit" element={
                    <ProtectedRoute requiredRoles={['ROLE_ADMIN']}>
                      <MenuEdit/>
                    </ProtectedRoute>
                  }/>
              </Route>

              <Route path='/login' element={<Login/>} />
              <Route path='/unauthorized' element={<div>권한이 없습니다.</div>} />
              <Route path='/oauth2/success' element={<OAuth2Success/>}  />
            </Routes>
          </div>
      </section>
    </div>
  )
}

export default App

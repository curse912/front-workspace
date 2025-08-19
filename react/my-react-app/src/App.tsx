import { Link, Route, Routes } from 'react-router-dom'
import Component from './01_react_basic/01.Component'
import ParentCompenent from './01_react_basic/02.PropsAndState'
import ArrayDataBinding from './01_react_basic/03.ArrayBinding'
import ObjectDataBinding from './01_react_basic/04.ObjectBinding'
import ModuleCSS from './01_react_basic/05.ModuleCss'
import UseEffectHook from './02_react_advanced/01_UseEffectHook'
import OptimizationHook from './02_react_advanced/02_OptimizationHook'
import OptimixationHook from './02_react_advanced/02_OptimizationHook'
import SignUpForm from './02_react_advanced/03_CustomHook'
import AxiosGet from './02_react_advanced/04_Axios_GET'
import AxiosPost from './02_react_advanced/04_Axios_POST'
import './App.css'
import BoardContainer from './practice/2.BoardContainer'
import Header from './02_react_advanced/05_Router'
import NestedRoute from './02_react_advanced/06_Nested_Route'
import { UserDetail, UserList, VariableRoute } from './02_react_advanced/07_Variable_Route'

function App() {

  return (
    //
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<div>메인페이지</div>}/>
        <Route path='/useEffect' element={<UseEffectHook/>}/>
        <Route path='/optimize' element={<OptimixationHook/>}/>
        <Route path='/nested' element={<NestedRoute/>}>
          {/* 하위 path에는 / 안붙임 */}
          <Route path='get' element={<AxiosGet/>}/>
          <Route path='post' element={<AxiosPost/>}/>
        </Route>
        <Route path='/variable-route' element={<VariableRoute/>}>
          {/* 동적 자원 경로 -> :id */}
          <Route path='user/:id' element={<UserDetail/>}/>
          <Route path='' element={<UserList/>}/>
        </Route>

        <Route path='*' element={
          <div>
            <h1 style={{color:'red'}}>잘못된 페이지 입니다.</h1>
            {/* Link
             - html의 a태그와 동일한 기능을 수행하나, 페이지 이동시 새로고침없이 컴포넌트를 전환한다. 
             - a태그로 인한 페이지 이동을 locaion을 조작하는 행위로, 리액트에서는 권장 되지 않는 이동방식이다.
            */}
            <Link to={"/"}>메인페이지</Link>
            {/* <a href="/">a태그</a> */}
          </div>
        }/>
      </Routes>
      <nav className='nav'>
        <li>
          <Link to="/">메인페이지</Link>
        </li>
        <li>
          <Link to="/useEffect">useEffect</Link>
        </li>
        <li>
          <Link to="/optimize">Optimization</Link>
        </li>
        <li>
          <Link to="/nested/get">Axios Get</Link>
        </li>
        <li>
          <Link to="/nested/post">Axios Post</Link>
        </li>
        <li>
          <Link to="/variable-route">Variable Route</Link>
        </li>
      </nav>
        {/* <Component/> */}
        {/* <ParentCompenent /> */}
        {/* <ArrayDataBinding /> */}
        {/* <ObjectDataBinding /> */}
        {/* <ModuleCSS/> */}
        {/* <UseEffectHook/> */}
        {/* <OptimizationHook /> */} 
        {/* <SignUpForm/> */}
        {/* <AxiosGet/> */}
        {/* <AxiosPost/> */}
    </>
  )
}

export default App

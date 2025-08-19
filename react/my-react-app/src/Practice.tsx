import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import UserInfoContainer from './practice/1.PropsPractice';
import BoardContainer from './practice/2.BoardContainer';
import AutoSaveEditor from './practice/4.UserEffectPractice';
import OptimizationPractice from './practice/OptimizationPractice';
import PokemonSearch from './practice/PokemonSearch';
import ModuleCSS from './01_react_basic/05.ModuleCss';

function Practice(){
    return (
        <>
            <div className='App'>
                <div className='header'>
                    <h1 style={{ fontWeight: "bolder" }}>KH G CLASS</h1>
                </div>
                <div>
                    {/* 라우트 설정  */}     
                    <Routes>
                        <Route path="/" element={<div className='title'>Home</div>} />
                        <Route path='/info' element={<UserInfoContainer/>}/>
                        <Route path='/board' element={<BoardContainer/>}/>
                        <Route path='/module' element={<ModuleCSS/>}/>
                        <Route path='/autosave' element={<AutoSaveEditor/>}/>
                        <Route path='/oprimization' element={<OptimizationPractice/>}/>
                        <Route path='/pokemon' >
                            <Route path='id/:id' element={<PokemonSearch/>}/>
                            <Route path='' element={<PokemonSearch/>}/>
                        </Route>
                    </Routes>
                    <nav className='nav'>
                    <li>
                        {/* Link 컴포넌트를 사용하여 라우팅 설정 */}
                        <Link to="/">메인페이지</Link>
                    </li>
                    <li>            
                        <Link to="/info">UserInfoContainer</Link>
                    </li>
                    <li>            
                        <Link to="/board">BoardContainer</Link>
                    </li>
                    <li>            
                        <Link to="/module">ModuleCSS</Link>
                    </li>
                    <li>            
                        <Link to="/autosave">AutoSaveEditor</Link>
                    </li>
                    <li>            
                        <Link to="/oprimization">OptimizationPractice</Link>
                    </li>
                    <li>            
                        <Link to="/pokemon">PokemonSearch</Link>
                    </li>
                    </nav>
                    
                </div>
            </div>
        </>
    )
}

export default Practice;
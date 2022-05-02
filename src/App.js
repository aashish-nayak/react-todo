import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
const App = ()=>{
    return (
        <>
            <Router>
                <Navigation/>
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;
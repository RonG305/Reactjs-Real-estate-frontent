import './App.css'
import HomePage from './pages/HomePage'
import Houses from './pages/Houses'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Sell from './pages/Sell'
import Buy from './pages/Buy'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import AssetDescription from './pages/AssetDescription'



function App() {


  return (
    <div className='font-poppins h-auto overflow-x-hidden'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/'  element={<HomePage />} />
          <Route path='houses/' element={<Houses />} />
          <Route path='about/' element={<About />} />
          <Route path='buy/' element={<Buy />} />
          <Route path='sell/' element={<Sell />} />
          <Route path='login/' element={<LoginPage />} />
          <Route path='signup/' element={<SignUpPage />} />
          <Route path='asset/' element={<AssetDescription />} />
        </Routes>
       
       
      </Router>
      
    </div>
  )
}

export default App

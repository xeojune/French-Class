import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './pages/Home';
import LessonPlan from './pages/LessonPlan';
import Login from './pages/Login';
import GrammarPlan from './pages/GrammarPlan';
import NavBar from './components/NavBar/NavBar';
import Background from './pages/Background';




function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Background />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lesson-plan" element={<LessonPlan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/grammar-plan" element={<GrammarPlan />} />
        </Routes>
      </div>
    </Router>
  
    
  )
}

export default App

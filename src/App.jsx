import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './pages/Home';
import LessonPlan from './pages/LessonPlan';
import GrammarPlan from './pages/GrammarPlan';
import Background from './pages/Background';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import RedirectAuthenticate from './components/ProtectedRoutes/RedirectAuthenticate';




function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/' element={<RedirectAuthenticate><Background /></RedirectAuthenticate>} />
          <Route path="/home" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route path="/lesson-plan" element={<ProtectedRoutes><LessonPlan /></ProtectedRoutes>} />
          <Route path="/grammar-plan" element={<ProtectedRoutes><GrammarPlan /></ProtectedRoutes>} />
        </Routes>
      </div>
    </Router>
  
    
  )
}

export default App

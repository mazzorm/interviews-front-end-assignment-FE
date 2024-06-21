import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Recipes from './pages/Recipes/Recipes';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

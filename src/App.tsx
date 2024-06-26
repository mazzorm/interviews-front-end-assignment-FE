import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';
import Recipes from './pages/Recipes/Recipes';
import Header from './components/Header/Header';
import AddRecipes from './pages/AddRecipes/AddRecipes';
import RecipeDetailsPage from './pages/RecipeDetailsPage/RecipeDetailsPage';

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/add-recipes" element={<AddRecipes />} />
          <Route path="/recipes/detail" element={<RecipeDetailsPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

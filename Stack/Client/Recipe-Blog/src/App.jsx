import './assets/css/index.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blog";
import OurRecipes from "./pages/Recipes";
import Footer from "./components/Footer"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/recipes" element={<OurRecipes />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

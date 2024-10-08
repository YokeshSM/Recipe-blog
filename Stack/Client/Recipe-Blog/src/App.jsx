import "./assets/css/index.css";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blog";
import OurRecipes from "./pages/Recipes";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "react-toastify/dist/ReactToastify.css";
// import { UserProvider } from "./context/userContext";
import { UserProvider } from "./context/UserContext";
import AddPage from "./pages/AddPage";

function App() {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/recipes" element={<OurRecipes />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addPage" element={<AddPage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </UserProvider>
  );
}

export default App;

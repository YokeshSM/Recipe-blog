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
import BreakFast from "./pages/breakFast";
import BakingGuide from "./pages/BakingGuide";
import HealthyDinnerRecipes from "./pages/HealthyDinnerRecipes";

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
          <Route path="/recipe" element={<OurRecipes />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/addPage" element={<AddPage />} />
          <Route path="/blogs/10-Easy-breakfast" element={<BreakFast />} />
          <Route path="/blogs/The-Ultimate-Guide-to-Baking-Perfect-Cookies" element={<BakingGuide />} />
          <Route path="/blogs/Healthy-Dinner-Recipes-Under-30-Minutes" element={<HealthyDinnerRecipes />} />
        </Routes>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;

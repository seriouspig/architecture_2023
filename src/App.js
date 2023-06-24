import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import Resume from "./components/pages/resume/Resume";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("All");

  const changeCategory = (category) => {
    console.log("Category changed to " + category);
    setCategory(category);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Projects category={category} />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/portfolio"
          element={<Projects category={category} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

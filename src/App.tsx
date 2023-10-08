import "./App.css";
import Project from "./Pages/Project/Project";
import HomePage from "./Pages/HomePage/HomePage";
import StaticPage from "./Pages/StaticPage/StaticPage";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Photo from "./Pages/Photo/Photo";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobileOrTablet = useMediaQuery({ query: "(max-width: 768px)" });
  return !isMobileOrTablet ? (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/portfolio/:clipName" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/photo" element={<Photo />} />
      </Routes>
    </div>
  ) : (
    <div className="App">
      <Routes>
        <Route path="/" element={<StaticPage />} />
      </Routes>
    </div>
  );
}

export default App;

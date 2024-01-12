import "./App.css";
import Project from "./Pages/Project/Project";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Photo from "./Pages/Photo/Photo";

function App() {
  return (
    // Affichez le contenu principal de l'application
    <div className="App">
      <Routes>
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio/:clipName" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/photo" element={<Photo />} />
        </>
      </Routes>
    </div>
  );
}

export default App;

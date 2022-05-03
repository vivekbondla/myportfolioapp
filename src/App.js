import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className="routes">
        {" "}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectPage/>}></Route>
          <Route path="/skills" element={<SkillsPage/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

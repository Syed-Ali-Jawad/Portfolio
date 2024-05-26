import "./App.css";
import AboutMe from "./Sections/AboutMe";
import Intro from "./Sections/Intro";
import LetsConnect from "./Sections/LetsConnect";
import MyProjects from "./Sections/MyProjects";
import NavBar from "./Components/NavBar";
import Skills from "./Sections/Skills";

function App() {
  return (
    <>
      <NavBar />
      <div class="background"></div>
      <Intro />
      <AboutMe />
      <Skills />
      <MyProjects />
      <LetsConnect />
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./sections/Landing/Landing";
import About from "./sections/About/About";
import FloatingButton from "./components/FloatingButton/FloatingButton";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);

  return (
    <div className={"App " + (state.toggleDarkTheme ? "dark" : "light")}>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FloatingButton />
    </div>
  );
}

export default App;

import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { MyProjects } from "./components/MyProjects";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import { useModal } from "./hooks/useModal";

function App() {
  
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />
      <MyProjects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

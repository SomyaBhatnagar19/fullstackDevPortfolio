/* /src/app.js */

import Menu from "./pages/menu";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import Skills from "./pages/skills";
import Project from "./pages/project";
import Contact from "./pages/contact";
import Footer from "./pages/footer";
import 'animate.css';


function App() {
  return (
    <div>
      <Menu />
      <Home />
      <AboutMe />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import "./app.sass";

import AboutMe from "./sections/about_me/AboutMe";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import Work from "./sections/work/Work";
import Recommendations from "./sections/recommendations/Recommendations";
import Skills from "./sections/skills/Skills";
import ScrollUp from "./sections/scrollup/ScrollUp";
import Experience from "./sections/experience/Experience";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <AboutMe />
        <Skills />
        <Experience />
        <Work />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;

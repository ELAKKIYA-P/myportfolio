import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
        <FooterBottom></FooterBottom>
      </div>
    </div>
  );
}

export default App;

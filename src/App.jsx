import Navbar from "./navbar/Navbar.jsx";
import Footer from "./footer/Footer.jsx";
import Hero from "./herosection/Hero.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import About from "./about/About.jsx";
import Contact from "./contant/Contact.jsx";
import Copyright from "./copyright/Copyright.jsx";

export default function App(){
  return <>
    <Navbar />
    <Hero />
    <Portfolio />
    <About />
    <Contact />
    <Footer />
    <Copyright/>
  </>
}


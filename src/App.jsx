import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";
import Stats from "./components/Stats";
import Services from "./components/Service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import HowWeWork from "./components/HowWeWork";
import FloatingWhatsApp from "./components/WALogo";

export default function App() {
  return (
    <Box>
      <FloatingWhatsApp />
      <Navbar />
      <Box id="home">
        <Hero />
      </Box>
      <About />
      <Stats />
      <Projects />
      <Box id="howwework">
        <HowWeWork />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Testimonials />
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
}

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Video } from "./components/Video";
import { Contact } from "./components/Contact";
import TestimonialSection from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="content-wrapper">
        <Hero />
        <Services />
        <About />
        <Video />
        <Gallery />
        <TestimonialSection />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

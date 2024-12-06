import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { Video } from "./components/Video";
import { Contact } from "./components/Contact";

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
        <Contact />

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Bluebird Millcreek
                </h3>
                <p className="text-gray-400">
                  Providing exceptional care and comfort in Mill Creek, WA
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-white"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-gray-400 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <p className="text-gray-400">Phone: (425) 225-6227</p>
                <p className="text-gray-400">Location: Mill Creek, WA</p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p>
                &copy; {new Date().getFullYear()} Bluebird Millcreek Adult
                Family Home. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Weather from "./Components/Projects/Weather";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Kalcylator from "./Components/Projects/Kalkylator";
import CvPersbrev from "./Components/CvPersbrev";
import MaxMin from "./Components/Projects/MaxMin";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Weather />
      <Kalcylator />
      <MaxMin />
      <CvPersbrev/>
      <Contact />

      <Footer />
    </div>
  );
}

export default App;

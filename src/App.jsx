import About from "./components/About";
import Achievments from "./components/Achievments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="">
        <Header />
      </div>

      <div
        id="home"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <Home />
      </div>

      <div id="about" className="">
        <About />
      </div>
      <div id="achievements" className="py-4">
        <Achievments />
      </div>
      <div id="gallery" className="gallery my-4">
        <Gallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;

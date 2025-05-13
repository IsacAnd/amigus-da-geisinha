import "./App.css";
import Slideshow from "./components/SlideShow";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="app-container">
      <Header />
      <section className="aboutus-container">
        <div className="slide-show-container">
          <Slideshow />
        </div>
        <div className="infos-container">
          <AboutUs />
        </div>
      </section>
      <section className="products-container">
        <h2>Nossos produtos feitos com muito amor 💕! </h2>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;

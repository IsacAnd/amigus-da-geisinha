import "./App.css";
import Slideshow from "./components/SlideShow";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";

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
      <section>
        <Products />
      </section>
      <footer></footer>
    </div>
  );
}

export default App;

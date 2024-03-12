import { useEffect, useState } from "react";
import "./App.css";
import {
  About,
  CustomerFeedback,
  CustomerMap,
  Footer,
  Hero,
  NavBar,
  Service,
} from "./components";
import { RevealOnScroll } from "./utils/revealOnScroll";

import PuffLoader from "react-spinners/PuffLoader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <PuffLoader
          loading={isLoading}
          size={150}
          color="#208486"
        />
        </div>
      ) : (
        <section>
          <NavBar />
          <Hero id="home" />
          <RevealOnScroll>
            <Service id="service" />
          </RevealOnScroll>
          <RevealOnScroll>
            <CustomerMap id="map" />
          </RevealOnScroll>
          <RevealOnScroll>
            <CustomerFeedback id="feedback" />
          </RevealOnScroll>
          <RevealOnScroll>
            <Footer id="contact" />
          </RevealOnScroll>
        </section>
      )}
    </>
  );
}

export default App;

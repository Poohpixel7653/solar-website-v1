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
import { Link } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="h-screen flex items-center justify-center">
          <PuffLoader loading={isLoading} size={150} color="#208486" />
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
          {/* <div class="fixed bottom-4 right-10 w-[100px] h-[100px]">
            <Link to="/package-list">
              <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
                สนใจดูแพ็กเกจ
              </button>
            </Link>
          </div> */}
        </section>
      )}
    </>
  );
}

export default App;

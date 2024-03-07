import { useState } from "react";
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

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <RevealOnScroll>
        <About />
      </RevealOnScroll> */}
      <RevealOnScroll>
        <Service />
      </RevealOnScroll>
      <RevealOnScroll>
        <CustomerMap />
      </RevealOnScroll>
      <RevealOnScroll>
        <CustomerFeedback />
      </RevealOnScroll>
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
}

export default App;

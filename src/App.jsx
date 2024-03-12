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
  );
}

export default App;

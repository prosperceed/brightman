import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;

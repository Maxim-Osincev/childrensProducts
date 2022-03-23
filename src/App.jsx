import React from "react";
import "./app.scss";
import Header from "./header/Header.jsx";
import Intro from "./intro/Intro.jsx";
import Gallery from "./gallery/Gallery.jsx";
import Footer from "./footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;

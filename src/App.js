import React from "react";
import "./App.css";
import Portfolio from "./Components/Portfolio";
import Header from "./Components/Header";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

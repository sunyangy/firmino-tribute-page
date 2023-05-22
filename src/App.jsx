import React from "react";
import {
  Footer,
  Blog,
  Possibility,
  Header,
  WhatPlayer,
  Features,
} from "./containers";
import { Cta, Navbar, Brand } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatPlayer />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;

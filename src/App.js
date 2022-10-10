import React from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./components/Teste";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        <Routes>
          <Route path="/teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

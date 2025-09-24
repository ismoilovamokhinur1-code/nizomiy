import { Routes, Route } from "react-router-dom";
import React from "react";
import Section from "./components/Section";
import Announce from "./pages/Announce";
import Informations from "./pages/Informations";
import "./i18n";

function App() {

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/announce" element={<Announce/>} />
          <Route path="/info" element={<Informations/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

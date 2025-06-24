import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MoodProvider } from "./components/MoodContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <MoodProvider>
        <BrowserRouter>
          <Navbar />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <AppRoutes />
          </header>
        </BrowserRouter>
      </MoodProvider>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import BitcoinRates from "./components/BitcoinRates";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BitcoinRates />
      </header>
    </div>
  );
}

export default App;

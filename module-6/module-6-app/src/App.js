import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting";
import BigCats from "./components/BigCats";
import Emoji from "./components/Emoji";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Logan">
          <p>Welcome to the React App!</p>
          <Emoji />
        </Greeting>
      </header>
      <BigCats />
    </div>
  );
}

export default App;

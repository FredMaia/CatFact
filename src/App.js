import "./App.css";
import { useState, useEffect } from "react";
import axios  from "axios";

function App() {
  const [phrase, setPhrase] = useState("");

  const fetchFact = () => {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setPhrase(res.data.fact);
    });
  };

  return (
    <div className="App">
      <button onClick={fetchFact}>Get a cat fun fact</button>
      <h2>{phrase}</h2>
    </div>
  );
}

export default App;

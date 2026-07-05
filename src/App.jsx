import morseData from "./assets/morse-code.json";
import { useState } from "react";
import "./App.scss";

const morseCode = morseData[0];
const reversedMorse = Object.fromEntries(
  Object.entries(morseCode).map(([key, value]) => [value, key]),
);

function App() {
  const [inputValue, setInputValue] = useState("");
  const [morse, setMorse] = useState("");
  const [eng, setEng] = useState("");

  function getMorse(e) {
    setInputValue(e.target.value);
    const results = [...e.target.value.toUpperCase()]
      .map((letter) => morseCode[letter])
      .filter(Boolean)
      .join(" ");
    setMorse(results);
  }

  function getEng(e) {
    setInputValue(e.target.value);
    const results = e.target.value
      .split(" ")
      .map((eng) => reversedMorse[eng])
      .filter(Boolean)
      .join("");
    setEng(results);
  }

  console.log(inputValue);
  console.log(morse);
  console.log(eng);

  return (
    <>
      <h1>Morse code translator</h1>
      <div className="inputText">
        <textarea
          name="input"
          placeholder="Type here..."
          onChange={(e) => {
            getMorse(e);
            getEng(e);
          }}
          value={inputValue}
        ></textarea>
      </div>
      <div className="display">{morse ? <div>{morse}</div> : ""}</div>
      <div className="display">{eng ? <div>{eng}</div> : ""}</div>
    </>
  );
}

export default App;

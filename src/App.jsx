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
    const results = e.target.value
      .toUpperCase()
      .split(" ")
      .map((word) =>
        [...word]
          .map((letter) => morseCode[letter])
          .filter(Boolean)
          .join(" "),
      )
      .join("/ ");
    setMorse(results);
  }

  function getEng(e) {
    setInputValue(e.target.value);
    const results = e.target.value
      .split(" / ")
      .map((word) =>
        word
          .split(" ")
          .map((code) => reversedMorse[code])
          .join(""),
      )
      .join(" ");
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
            setInputValue(e.target.value);
            if (/[.-]/.test(e.target.value)) {
              getEng(e);
            } else {
              getMorse(e);
            }
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

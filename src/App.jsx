import morseData from "./assets/morse-code.json";
import { useState } from "react";
import "./App.scss";

const morseCode = morseData[0];
const reversedMorse = Object.fromEntries(
  Object.entries(morseCode).map(([key, value]) => [value, key]),
);
여깃;

export function getMorse(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) =>
      [...word]
        .map((letter) => morseCode[letter])
        .filter(Boolean)
        .join(" "),
    )
    .join("/ ");
}

export function getEng(str) {
  return str
    .split(" / ")
    .map((word) =>
      word
        .split(" ")
        .map((code) => reversedMorse[code])
        .join(""),
    )
    .join(" ");
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [morse, setMorse] = useState("");
  const [eng, setEng] = useState("");

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
            if (e.target.value === "") {
              setEng("");
              setMorse("");
              return;
            }
            if (/[.-]/.test(e.target.value)) {
              setEng(getEng(e.target.value));
            } else {
              setMorse(getMorse(e.target.value));
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

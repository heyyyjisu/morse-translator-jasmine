import { useState } from "react";
import "./App.scss";
import { getEng, getMorse } from "./logic";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [morse, setMorse] = useState("");
  const [eng, setEng] = useState("");

  console.log(inputValue);
  console.log(morse);
  console.log(eng);

  return (
    <>
      <div className="main">
        <h1 className="main__heading heading">
          {" "}
          <span className="heading__text">Morse Translator</span>
          <span className="heading__morse">
            -- --- .-. ... . / - .-. .- -. ... .-.. .- - --- .-.
          </span>
        </h1>
        <div className="main__inputText">
          <textarea
            name="input"
            placeholder="Type here..."
            maxLength={80}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (e.target.value === "") {
                setEng("");
                setMorse("");
                return;
              }
              if (/[.-]/.test(e.target.value)) {
                setEng(getEng(e.target.value));
                setMorse("");
              } else {
                setMorse(getMorse(e.target.value));
                setEng("");
              }
            }}
            value={inputValue}
          ></textarea>
        </div>
        <div className="main__display">
          {morse && (
            <div className="main__bubble main__bubble--narrow">{morse}</div>
          )}
          {eng && <div className="main__bubble main__bubble--wide">{eng}</div>}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.scss";
import { getEng, getMorse, isMorse, getMorseTable } from "./logic";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [morse, setMorse] = useState("");
  const [eng, setEng] = useState("");

  console.log(inputValue);
  console.log(morse);
  console.log(eng);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value) {
      setEng("");
      setMorse("");
      return;
    }

    if (isMorse(value)) {
      setMorse("");
      setEng(getEng(value));
    } else {
      setEng("");
      setMorse(getMorse(value));
    }
  };

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
            onChange={handleChange}
            value={inputValue}
          ></textarea>
        </div>
        <div className="main__display">
          {morse && (
            <div className="main__bubble main__bubble--narrow">{morse}</div>
          )}
          {eng && <div className="main__bubble main__bubble--wide">{eng}</div>}
        </div>
        <div className="morseTable">
          {getMorseTable().map(([key, code]) => (
            <div key={key}>
              "{key}": "{code}"
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

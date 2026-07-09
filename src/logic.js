import morseCode from "./assets/morse-code.json";

// const reversedMorse = Object.fromEntries(
//   Object.entries(morseCode).map(([key, value]) => [value, key]),
// );

const reversedMorse = Object.entries(morseCode).reduce((init, [key, value]) => {
  init[value] = key;
  return init;
}, {});

export function getMorse(str) {
  return str
    .toLowerCase()
    .split("")
    .map((letter) => morseCode[letter])
    .join(" ");
}

export function getEng(str) {
  return str
    .split(" ")
    .map((morse) => reversedMorse[morse])
    .join("");
}

export function isMorse(str) {
  return !/[a-z]/i.test(str) && /[.-]/.test(str);
}

export function getMorseTable() {
  return Object.entries(morseCode);
}

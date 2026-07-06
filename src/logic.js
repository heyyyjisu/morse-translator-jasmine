import morseData from "./assets/morse-code.json";

const morseCode = morseData[0];
const reversedMorse = Object.fromEntries(
  Object.entries(morseCode).map(([key, value]) => [value, key]),
);

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

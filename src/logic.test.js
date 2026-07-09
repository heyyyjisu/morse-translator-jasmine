import { getMorse, getEng, isMorse } from "./logic.js";

describe("getMorse", () => {
  test("should translate a single letter", () => {
    expect(getMorse("a")).toBe(".-");
  });

  test("should translate a word", () => {
    expect(getMorse("hello")).toBe(".... . .-.. .-.. ---");
  });

  test("should translate multiple words", () => {
    expect(getMorse("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -..",
    );
  });
});

describe("getEng", () => {
  test("should translate morse to a letter", () => {
    expect(getEng(".-")).toBe("a");
  });

  test("should translate morse to a word", () => {
    expect(getEng(".... . .-.. .-.. ---")).toBe("hello");
  });
});

describe("isMorse", () => {
  test("should return true for morse dots and dashes", () => {
    expect(isMorse("... --- ...")).toBe(true);
  });
  test("should return false for plain text", () => {
    expect(isMorse("hello world")).toBe(false);
  });

  test("should return false for text with punctuation", () => {
    expect(isMorse("hello.")).toBe(false);
  });

  test("should return false for empty string", () => {
    expect(isMorse("")).toBe(false);
  });
});

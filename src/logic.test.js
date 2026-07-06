import { getMorse, getEng } from "./logic.js";

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

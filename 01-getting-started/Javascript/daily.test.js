import temp from './daily.js'

test("Check temperature", () => {
    expect(temp.convertToFahrenheit(0)).toBe(32);
    expect(temp.convertToFahrenheit(100)).toBe(212);
    expect(temp.convertToFahrenheit("0")).toBe(32);
    expect(temp.convertToFahrenheit("100")).toBe(212);
    });
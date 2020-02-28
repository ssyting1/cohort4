import functions from './syntax'

test("Check number", () => {
    expect(functions.number1(10)).toBe("true");
});
    test("Check string", () => {
        expect(functions.string1("this")).toBe("true");
});
test("Check boolean", () => {
    expect(functions.boolean1(true)).toBe("true");
});
test("Check array", () => {
    expect(functions.array1([1])).toBe("true");
});
test("Check object", () => {
    expect(functions.object1()).toBe("EvolveU was located in Calgary");
});
test("Check undefined", () => {
    expect(functions.undefined1()).toBe("undefined");
});
test("Check if/else", () => {
    expect(functions.ifelse1(42)).toBe("legal");
});
test("Check Array add/push/update", () => {
    expect(functions.array2()).toEqual(["Ford", "Toyota", "Acura", "Fiat", "Nissan"]);
});
test("Check Loops (for)", () => {
    expect(functions.loops1()).toBe("It's 15");
});
test("Check Loops (for/in)", () => {
    expect(functions.loops2()).toBe("Simon");
});
test("Check Loops (while)", () => {
    expect(functions.loops3()).toBe(3);
});
test("Check Loops (do while)", () => {
    expect(functions.loops4()).toBe(7);
});
test("Check Loops (forEach)", () => {
    expect(functions.loops5()).toEqual(["WhatsApp", "Instagram", "Facebook"]);
});
test("Check Loops (declare objects)", () => {
    expect(functions.declare1()).toBe("I'm contestant 7, Simon Ting");
});
test("Check Loops (lookup key)", () => {
    expect(functions.lookup1()).toEqual(15);
});
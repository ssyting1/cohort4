import functions from './functions'

test('Check the sizes', () => {
    expect(functions.size(-1)).toBe("small"); // Consider the edge cases
    expect(functions.size(0)).toBe("small");
    expect(functions.size(10)).toBe("medium");
    expect(functions.size(15)).toBe("medium");
    expect(functions.size(20)).toBe("large");
    expect(functions.size(2000000)).toBe("large");
    expect(functions.size(-101)).toBe("extra large");
});

test('Does that add function work?', () => {
    expect(functions.add(1,2)).toBe(3);
    expect(functions.add(101,202)).toBe(303);
});

test('Check the number', () => {
    expect(functions.isEven(1)).toBe(false);
});
test("Check Array add", () => {
    expect(functions.arrayAdd("1")).toEqual("1 added to the Array");
    expect(functions.arrayAdd("text")).toEqual("text is not a valid number")
});
// test("Check Array show", () => {
//     expect(functions.arrayShow()).toEqual("");

// });

// function newFunction() {
//     expect(functions.arrayShow("100")).toEqual("");
// }

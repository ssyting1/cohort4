import functions from './functions'

// test('Check the sizes', () => {
//     expect(functions.size(-1)).toBe("small"); // Consider the edge cases
//     expect(functions.size(0)).toBe("small");
//     expect(functions.size(10)).toBe("medium");
//     expect(functions.size(15)).toBe("medium");
//     expect(functions.size(20)).toBe("large");
//     expect(functions.size(2000000)).toBe("large");
//     expect(functions.size(-101)).toBe("extra large");
// });

// 100D Competencies - Working wth Arrays

test('Does the array add functions work?', () => {
    const arr1 = functions.arrAdd([1,2],5);
    expect(arr1.length).toBe(20);
    expect(arr1[0]).toBe("5");

    const arr2 = functions.arrAdd([3,4,5],7);
    expect(arr2.length).toBe(20);
    expect(arr2[0]).toBe("7");

    // Making sure strings can't be added to array.
    const arr3 = functions.arrAdd([],"M");
    expect(arr3.length).toBe(23);
    expect(arr3[0]).toBe("M");
});

// 100D Competencies - Working wth Dictionaries
test('Does the lookup function work?', () => {
    const cap = functions.getCapital('AB');
    expect(cap).toBe("Edmonton");
    expect(functions.getCapital('ON')).toBe("Toronto");
});

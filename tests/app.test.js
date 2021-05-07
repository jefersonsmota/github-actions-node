const {sum} = require('../src/app.js');

test("test sum", () => {
    const a = 1;
    const b = 2;
    const expected = 3;

    expect(sum(a,b)).toBe(expected);
})
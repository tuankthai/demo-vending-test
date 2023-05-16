// /*
    // Payment
// */
// no bill over 20 : noOver20Bill()
// Refund if no item remains ( inventory )
// Detect counterfeits

const vending = require("./vending")

// Unit Tests
describe("Vending machine payment - Unit Tests", () => {
    test("no bill over 20: expect small bill", () => {
        const bill = 5
        expect(vending.noOver20Bill(bill)).toBe(true);
    });

    test("no bill over 20: expect big bill", () => {
        const bill = 100
        expect(vending.noOver20Bill(bill)).toBe(false);
    });
 
    test("no bill over 20: expect fake bill", () => {
        const bill = "fake bill"
        expect(vending.noOver20Bill(bill)).toBe("fake bill");
    });

//     test("Subtraction", () => {
//         expect(calculator.subtract(5, 2)).toBe(3);
//     });

//     test("Multiplication", () => {
//         expect(calculator.multiply(2, 4)).toBe(8);
//     });

//     test("Division", () => {
//         expect(calculator.divide(10, 2)).toBe(5);
//     });

//     test("Division by Zero", () => {
//         expect(() => calculator.divide(10, 0)).toThrow("Cannot divide by zero");
//     });
});
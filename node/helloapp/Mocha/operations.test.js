const operations = require('./operations');

it('should multiply two numbers', function () {
    const expectedResult = 15;
    const result = operations.multiply(3, 5);
    if (result !== expectedResult) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        );
    }
});
it('should add two numbers', function () {
    const expectedResult = 16;
    const result = operations.add(9, 7);
    if (result !== expectedResult) {
        throw new Error(
            `Expected ${expectedResult}, but got ${result}`
        );
    }
});

it('shoud async multiply two numbers', function (done) {
    const expectedResult = 12;
    operations.multiplyAsync(4, 3, function (result) {
        if (result !== expectedResult) {
            throw new Error(
                `Expected ${expectedResult}, but got ${result}`
            );
        }
        done();
    });
});

// const operations = require('./operations');

// it('should multiply two numbers', function () {
//     const expectedResult = 15;
//     const result = operations.multiply(3, 5);
//     if (result !== expectedResult) {
//         throw new Error(
//             `Expected ${expectedResult}, but got ${result}`
//         );
//     }
// });
// it('should add two numbers', function () {
//     const expectedResult = 16;
//     const result = operations.add(9, 7);
//     if (result !== expectedResult) {
//         throw new Error(
//             `Expected ${expectedResult}, but got ${result}`
//         );
//     }
// });

// const operations = require('./operations');

// it('should multiply two numbers', function () {
//     var expectedResult = 16;
//     var result = operations.multiply(3, 5);
//     if (result !== expectedResult) {
//         throw new Error(
//             `Expected ${expectedResult}, but got ${result}`
//         );
//     }
// });

// const operations = require('./operations');

// it('should multiply two numbers', function () {
//     var expectedResult = 15;
//     var result = operations.multiply(3, 5);
//     if (result !== expectedResult) {
//         throw new Error(
//             `Expected ${expectedResult}, but got ${result}`
//         );
//     }
// });

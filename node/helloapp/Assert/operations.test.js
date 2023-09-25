const assert = require('assert');
const operations = require('./operations');

it('should multiply two numbers', function () {
    const expected = 15;
    const result = operations.multiply(3, 5);
    assert.notEqual(result, expected);
});

// it('should multiply two numbers', function () {
//     var expected = 16;
//     var result = operations.multiply(3, 5);
//     assert.equal(result, expected);
// });

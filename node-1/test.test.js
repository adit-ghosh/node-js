const sum = require('./sum');
const first = require('./first');

test('Test 1 : Positive', () => {
  expect(sum(2, 3)).toBe(5);
});

test('Test 2 : Negative', () => {
  expect(sum(-2, -3)).toBe(-5);
});

test('Test 3 : Pos-Negaitive', () => {
  expect(sum(2, -3)).toBe(-1);
});

test('Test 4 : Neg-Positive', () => {
  expect(sum(-2, 3)).toBe(1);
});

test('Test new man ', () => {
  expect(first()).toBe("I am an Idiot");
});
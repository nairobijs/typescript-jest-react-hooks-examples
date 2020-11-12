describe('true is truthy and false is falsy', () => { // test suite
  test('true is truthy', () => { // test case
    expect(true).toBe(true); // assertion
  });
 
  it('lets false be false', () => { // assertion
    expect(false).toBe(false);
  });
});

function sum(x, y) {
  return x + y;
}
 
describe('sum', () => {
  test('sums up two values', () => {
    expect(sum(2, 4)).toBe(6);
  });
});
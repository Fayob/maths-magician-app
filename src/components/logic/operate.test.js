import operate from './operate';

describe('test for operate function', () => {
  it('should add numbers together', () => {
    expect(operate(1, 1, '+')).toBe('2');
  });

  it('should subtract numbers', () => {
    expect(operate('10', '7', '-')).toBe('3');
  });

  it('should multiply numbers', () => {
    expect(operate(10, 10, 'x')).toBe('100');
  });

  it('should divide numbers', () => {
    expect(operate('10', '2', '÷')).toBe('5');
    expect(operate(3, 0, '÷')).toBe('Can\'t divide by 0.');
  });

  it('should find the modulus of numbers', () => {
    expect(operate(9, 2, '%')).toBe('1');
  });

  it('should throw an error', () => {
    expect(() => {
      operate(9, 2, '#');
    }).toThrowError();
  });
});

import calculate from './calculate';

describe('testing calculate function', () => {
  test('should return an object with total', () => {
    // const result = calculate({ total: '0', next: '5', operation: '+' }, '=');
    expect(calculate({ total: '10', next: '5', operation: '+' }, '=')).toEqual({ total: '15', next: null, operation: null });
    expect(calculate({ total: '10', next: '5', operation: '-' }, '=')).toEqual({ total: '5', next: null, operation: null });
    expect(calculate({ total: '10', next: '5', operation: 'x' }, '=')).toEqual({ total: '50', next: null, operation: null });
    expect(calculate({ total: '10', next: '5', operation: '÷' }, '=')).toEqual({ total: '2', next: null, operation: null });
  });

  test('should return an empty object', () => {
    expect(calculate({ total: '0', next: '5', operation: null }, '=')).toEqual({});
  });

  test('for the +/- buttonName', () => {
    expect(calculate({ total: '10', next: '5', operation: null }, '+/-')).toEqual({ total: '10', next: '-5', operation: null });
    expect(calculate({ total: '10', next: null, operation: null }, '+/-')).toEqual({ total: '-10', next: null, operation: null });
  });

  test('should update next value property', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, '8')).toEqual({ total: '10', next: '58', operation: '+' });
  });

  test('should reset all values to default', () => {
    expect(calculate({ total: '10', next: '5', operation: '+' }, 'AC')).toEqual({ total: '0', next: null, operation: null });
  });
});

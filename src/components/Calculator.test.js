import React from 'react';
import { render, screen } from '@testing-library/react';

import Calculator from './Calculator';

describe('test for Calculator Component', () => {
  it('should render Calculator Component', () => {
    expect(render(<Calculator />)).toMatchSnapshot();
  });

  it('should render Calculator Component', () => {
    render(<Calculator />);
    screen.debug();

    expect(screen.findAllByDisplayValue('Let`s do some math!')).toBeInTheDocument();
  });
});

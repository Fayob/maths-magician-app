import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Calculator from '../components/Calculator';

describe('test for Calculator Component', () => {
  it('should render Calculator Component', () => {
    expect(render(<Calculator />)).toMatchSnapshot();
  });

  it('should render Calculator Component', () => {
    render(<Calculator />);
    expect(screen.getByText('Let`s do some math!')).not.toBeNull();
    expect(screen.queryByText('8')).toBeInTheDocument();
  });
});

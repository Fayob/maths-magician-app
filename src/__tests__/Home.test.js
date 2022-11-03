import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from '../components/Home';

describe('test for Home Component', () => {
  it('should render Home Component', () => {
    expect(render(<Home />)).toMatchSnapshot();
  });

  it('should query text content', () => {
    render(<Home />);
    screen.debug();

    expect(screen.queryByText(/Welcome to our page!/)).not.toBeNull();
  });
});

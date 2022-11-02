import React from 'react';
import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('test for Navbar Component', () => {
  it('should render Navbar Component', () => {
    expect(render(<Navbar />)).toMatchSnapshot();
  });
});

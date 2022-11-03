import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../components/Navbar';

describe('test for Navbar Component', () => {
  it('should render Navbar Component', () => {
    expect(render(<Navbar />, { wrapper: BrowserRouter })).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Home from './Home';

describe('test for Home Component', () => {
  it('should render Home Component', () => {
    expect(render(<Home />)).toMatchSnapshot();
  });
});

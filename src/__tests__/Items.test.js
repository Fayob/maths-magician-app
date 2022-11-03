/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Item from '../components/Items';

const onClickHandler = jest.fn();

describe('test for Item Component', () => {
  it('should render Item component', () => {
    expect(render(<Item value="a" className="Ak" onClickHandler={onClickHandler} />)).toMatchSnapshot();
  });

  it('should test for click event', () => {
    render(
      <Item value="AC" className="AC" onClickHandler={onClickHandler} />,
    );

    fireEvent.click(screen.getByText('AC'));
    fireEvent.click(screen.getByText('AC'));

    expect(onClickHandler).toHaveBeenCalledTimes(2);
  });
});

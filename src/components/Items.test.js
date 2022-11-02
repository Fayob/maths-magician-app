/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Item from './Items';

describe('test for Item Component', () => {
  it('should render Item Component', () => {
    const onClickHandler = jest.fn();
    render(
      <Item value="AC" className="AC" onClickHandler={onClickHandler} />,
    );

    fireEvent.change(screen.getByRole(''), {
      target: { value: 'AC' },
    });

    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });
});

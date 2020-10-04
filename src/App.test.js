import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

test('renders the input element to the page', () => {
  const { getByLabelText } = render(<Search />);
  const inputElement = getByLabelText(/search-input/i);
  expect(inputElement).toBeInTheDocument();

 fireEvent.change(inputElement, { target: { value: '23' } })
  expect(inputElement.value).toBe('23')
});

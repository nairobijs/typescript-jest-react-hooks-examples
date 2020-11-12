import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';


test('renders the calculator component', () => {
  render(<Calculator />);
  const element = screen.getByText(/Calculator/i);
  expect(element).toBeInTheDocument();
});

test('initializes with display value of 0', () => {
  const { getByTestId } = render(<Calculator />);
  const element = getByTestId('display')
  expect(element).toHaveTextContent('0');
});

test('displays 10 when 10 has been typed', () => {
  // render(<Calculator />);
});

test('displays 20 when 020 has been typed', () => {
  // render(<Calculator />);
});

test('prevents typing of two operators after each other', () => {
  // render(<Calculator />);
});

test('addition of 5 and 3 should equal 8', () => {
  // render(<Calculator />);
});

test('multiplication of 5 and 3 should equal 15', () => {
  // render(<Calculator />);
});


function sum(x, y) {
  return x + y;
}
 
describe('sum', () => {
  test('sums up two values', () => {
    expect(sum(2, 4)).toBe(6);
  });
});
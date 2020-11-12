import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendar from './Calendar';

test('renders text', () => {
  render(<Calendar />);
  const element = screen.getByText(/November/i);
  expect(element).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders the search input', () => {
  render(<Search />);
  const linkElement = screen.getByText(/Search:/i);
  expect(linkElement).toBeInTheDocument();
});

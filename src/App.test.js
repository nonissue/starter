import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders logo link', () => {
  // const { getByText } = render(<App />);
  const { getByRole } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  const logoImage = getByRole('link', { name: 'logo-link' });
  expect(logoImage).toBeInTheDocument();
});

test('renders Search input with correct placeholder', () => {
  const { getByPlaceholderText } = render(<App />);
  const searchField = getByPlaceholderText('Search');
  expect(searchField).toBeInTheDocument();
});

test('renders default links', () => {
  const { getByTestId } = render(<App />);
  const linkList = getByTestId('links');
  expect(linkList).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders table header with Metic column', () => {
  const { getByText } = render(<App />);
  const headElement = getByText(/Metric/i);
  expect(headElement).toBeInTheDocument();
});

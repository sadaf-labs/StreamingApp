import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Home from './pages/Home';

jest.mock('./pages/Home', () => () => <div>Mock Home Component</div>);

test('renders the Home component within App', () => {
  render(<App />);
  
  expect(screen.getByText(/Mock Home Component/i)).toBeInTheDocument();
});

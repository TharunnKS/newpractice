import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Jenkins test project', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jenkins Test Project/i);
  expect(linkElement).toBeInTheDocument();
});
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PetSpace navigation', () => {
  render(<App />);
  const linkElement = screen.getByText(/Find sitters/i);
  expect(linkElement).toBeInTheDocument();
});

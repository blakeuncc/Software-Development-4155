import { render, screen } from '@testing-library/react';
import { act } from 'react'; // Make sure you're importing act from react
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to CLTAlert/i); // Adjusted the text to look for "Welcome to CLTAlert"
  expect(welcomeElement).toBeInTheDocument();
});

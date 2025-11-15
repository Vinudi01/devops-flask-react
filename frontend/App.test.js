import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders React Frontend text', () => {
  render(<App />);
  const heading = screen.getByText(/React Frontend/i);
  expect(heading).toBeInTheDocument();
});

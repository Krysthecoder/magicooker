import { render, screen } from '@testing-library/react';
import Hello from './hello';

it('renders "Hello world"', () => {
  render(<Hello />);
  const testText = screen.getByText(/Hello world/i);
  expect(testText).toBeInTheDocument();
});

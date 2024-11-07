import { render, screen } from '@testing-library/react';
import Hello from './hello';

it('renders "Hello world"', () => {
  render(<Hello title="Hello world" />);
  const testText = screen.getByText(/Hello world/i);
  expect(testText).toBeInTheDocument();
});

it('renders "Mr Alvison"', () => {
  render(<Hello title="Mr Alvison," />);
  expect(screen.getByText('Mr Alvison,')).toBeInTheDocument();
});

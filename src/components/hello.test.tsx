import { render, screen } from '@testing-library/react';
import Hello from './Hello';

it('renders "Hello world"', () => {
  render(<Hello title="Hello world" />);
  const testText = screen.getByText('Hello world');
  expect(testText).toBeInTheDocument();
});

it('renders "Mr Alvison"', () => {
  render(<Hello title="Mr Alvison," />);
  expect(screen.getByText('Mr Alvison,')).toBeInTheDocument();
});

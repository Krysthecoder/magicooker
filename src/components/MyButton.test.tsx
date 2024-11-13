import { render, screen, fireEvent } from '@testing-library/react';
import MyButton from './MyButton';

describe('MyButton Component', () => {
  it('renders the button with the correct text', () => {
    render(<MyButton onClick={() => {}} children="Submit" />);
    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Submit');
  });

  it('calls onClick handler when the button is clicked', () => {
    const handleClick = jest.fn();
    render(<MyButton onClick={handleClick} children="Submit" />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick handler if the button is disabled', () => {
    const handleClick = jest.fn();
    render(
      <MyButton onClick={handleClick} children="Click me" disabled />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders the button as disabled when the disabled prop is true', () => {
    render(
      <MyButton onClick={() => {}} children="Disabled" disabled />
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('calls onClick handler multiple times on multiple clicks if not disabled', () => {
    const handleClick = jest.fn();
    render(<MyButton onClick={handleClick} children="Click me" />);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import MyButton from './MyButton';

describe('Button Component Test', () => {
  it('Calls onClick handler when btn is clicked', () => {
    const handleClick = jest.fn();
    render(<MyButton onClick={handleClick} children="submit" />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Should not call onClick if disabled', () => {
    const handleClick = jest.fn();
    render(<MyButton onClick={handleClick} children="click me" disabled />);
    const btn = screen.getByRole('button');
    fireEvent.click(btn);
    expect(handleClick).not.toHaveBeenCalled();
  });
});

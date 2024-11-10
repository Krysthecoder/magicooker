import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Hello Component', () => {
  it('renders with title << Hello world >>', () => {
    render(<Home title="Hello world" />);
    const testText = screen.getByText('Hello world');
    expect(testText).toBeInTheDocument();
  });

  it('renders with title << MagiCooker Recipes >>', () => {
    render(<Home title="MagiCooker Recipes," />);
    const homeTitle = screen.getByText('MagiCooker Recipes,');
    expect(homeTitle).toBeInTheDocument();
  });

  it('renders correctly with an empty title', () => {
    render(<Home title="" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('');
  });

  it('renders correctly with an undefined title', () => {
    render(<Home title={undefined} />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Home title="Snapshot test" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders an h1 element for accessibility', () => {
    render(<Home title="Accessibility check" />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});

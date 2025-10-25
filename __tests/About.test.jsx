
import { render, screen } from '@testing-library/react'
import About from '@/pages/about'

describe('About', () => {

  it('should contain the text "About"', () => {
    render(<About />);

    const getElm = screen.getByText(/About/i);
    expect(getElm).toBeInTheDocument();
  });

  it('should contain the text "Back to the home page"', () => {
    render(<About />);

    const getElm = screen.getByText(/Back to the home page/i);
    expect(getElm).toBeInTheDocument();
  });

  it('should contain the text "Lorem ipsum"', () => {
    render(<About />);

    const getElm = screen.getByText(/Lorem ipsum/i);
    expect(getElm).toBeInTheDocument();
  });
});



import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('should have About text', () => {
    render(<Home />);

    const getElm = screen.getByText('About');
    expect(getElm).toBeInTheDocument();
  });

  it('should contain the text "Lorem ipsum"', () => {
    render(<Home />);

    const getElm = screen.getByText(/Welcome to Alaph Corp/i);
    expect(getElm).toBeInTheDocument();
  });
});


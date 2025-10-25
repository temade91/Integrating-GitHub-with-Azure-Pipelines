import React from 'react'; // 👈 Add this
import { render, screen } from '@testing-library/react';
import About from '@/pages/about';

describe('About', () => {
  it('renders About text', () => {
    render(<About />);
    const aboutText = screen.getByText(/About Alpha Corp/i);
    expect(aboutText).toBeInTheDocument();
  });

  it('renders back to home link', () => {
    render(<About />);
    const homeLink = screen.getByText(/Back to the home page/i);
    expect(homeLink).toBeInTheDocument();
  });

  it('renders Lorem ipsum text', () => {
    render(<About />);
    const loremText = screen.getByText(/Lorem ipsum/i);
    expect(loremText).toBeInTheDocument();
  });
});


import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  it('renders the About link heading', () => {
    render(<Home />);
    // Target the heading specifically to avoid multiple matches
    const aboutHeading = screen.getByRole('heading', { name: /About/i });
    expect(aboutHeading).toBeInTheDocument();
  });

  it('renders the main welcome text', () => {
    render(<Home />);
    const welcomeText = screen.getByText(/Welcome to Alaph Corp/i);
    expect(welcomeText).toBeInTheDocument();
  });
});


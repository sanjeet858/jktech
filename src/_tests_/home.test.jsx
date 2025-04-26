import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders Hello text', () => {
    render(<Home />);
   
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
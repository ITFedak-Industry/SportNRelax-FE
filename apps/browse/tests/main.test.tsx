import { render, screen } from '@testing-library/react';

test('renders Hello, React Testing Library! text', () => {
  render(<div>123</div>);
  const linkElement = screen.getByText(/123/i);
  expect(linkElement).toBeInTheDocument();
});

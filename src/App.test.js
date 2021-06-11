import { render, screen } from '@testing-library/react';
import AppJs from './component/App.js';

test('renders learn react link', () => {
  render(<AppJs />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

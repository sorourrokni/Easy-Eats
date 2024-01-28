import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import HomePage from '../pages/Home';

test('renders HomePage component', () => {
  const { getByText } = render(<HomePage />);
  expect(getByText('Explore categories')).toBeInTheDocument();
});

import { render } from '@testing-library/react';
import Box from './Box';

describe('Box component', () => {
  // Smoke test
  it('renders without crashing', () => {
    const { getByText } = render(<Box id="1" width={100} height={100} backgroundColor="red" />);
    const removeButton = getByText(/X/i);
    expect(removeButton).toBeInTheDocument();
  });

  // Snapshot test
  it('matches snapshot', () => {
    const { container } = render(<Box id="1" width={100} height={100} backgroundColor="red" />);
    expect(container).toMatchSnapshot();
  });
});

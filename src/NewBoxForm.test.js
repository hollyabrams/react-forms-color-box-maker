import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

describe('NewBoxForm', () => {
  test('renders without errors', () => {
    render(<NewBoxForm />);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('calls addBox function with correct data when form is submitted', () => {
    const addBox = jest.fn();
    const { getByLabelText, getByText } = render(<NewBoxForm addBox={addBox} />);

    fireEvent.change(getByLabelText(/width/i), { target: { value: '100' } });
    fireEvent.change(getByLabelText(/height/i), { target: { value: '200' } });
    fireEvent.change(getByLabelText(/background color/i), { target: { value: '#ff0000' } });

    fireEvent.click(getByText(/add box/i));

    expect(addBox).toHaveBeenCalledWith({ width: 100, height: 200, backgroundColor: '#ff0000' });
  });
});

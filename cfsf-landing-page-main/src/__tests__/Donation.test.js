import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Donation from '../components/Donation';

// Mock the services
jest.mock('../services', () => ({
  donationService: {
    submitDonation: jest.fn(),
  },
}));

describe('Donation Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders donation form', () => {
    render(<Donation />);

    expect(screen.getByText(/make a difference today/i)).toBeInTheDocument();
    expect(screen.getByText(/donation form/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/donation amount/i)).toBeInTheDocument();
  });

  test('allows user to fill out form', async () => {
    const user = userEvent.setup();
    render(<Donation />);

    const nameInput = screen.getByLabelText(/full name/i);
    const emailInput = screen.getByLabelText(/email address/i);
    const amountInput = screen.getByLabelText(/donation amount/i);

    await user.type(nameInput, 'John Doe');
    await user.type(emailInput, 'john@example.com');
    await user.type(amountInput, '50');

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(amountInput).toHaveValue(50);
  });

  test('quick amount buttons set amount value', async () => {
    const user = userEvent.setup();
    render(<Donation />);

    const amountInput = screen.getByLabelText(/donation amount/i);
    const amount25Button = screen.getByText('$25');

    await user.click(amount25Button);

    expect(amountInput).toHaveValue(25);
  });

  test('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<Donation />);

    const submitButton = screen.getByText(/complete donation/i);

    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/amount is required/i)).toBeInTheDocument();
    });
  });

  test('donation type radio buttons work', async () => {
    const user = userEvent.setup();
    render(<Donation />);

    const oneTimeRadio = screen.getByLabelText(/one-time/i);
    const monthlyRadio = screen.getByLabelText(/monthly/i);

    expect(oneTimeRadio).toBeChecked();
    expect(monthlyRadio).not.toBeChecked();

    await user.click(monthlyRadio);

    expect(oneTimeRadio).not.toBeChecked();
    expect(monthlyRadio).toBeChecked();
  });
});

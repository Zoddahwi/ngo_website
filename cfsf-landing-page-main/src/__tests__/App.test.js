import { render, screen } from '@testing-library/react';
import { AppProvider } from '../context';
import App from '../App';

// Mock the scroll function
const mockScrollIntoView = jest.fn();
Object.defineProperty(window, 'HTMLElement', {
  value: class extends HTMLElement {
    scrollIntoView = mockScrollIntoView;
  },
});

const renderWithProviders = (ui) => {
  return render(<AppProvider>{ui}</AppProvider>);
};

describe('App Component', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear();
  });

  test('renders without crashing', () => {
    renderWithProviders(<App />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('displays the site title', () => {
    renderWithProviders(<App />);
    expect(screen.getByText(/chance for souls/i)).toBeInTheDocument();
  });

  test('renders all main sections', () => {
    renderWithProviders(<App />);

    // Check for main sections
    expect(screen.getByText(/make a difference today/i)).toBeInTheDocument();
    expect(screen.getByText(/why you should support/i)).toBeInTheDocument();
    expect(screen.getByText(/news and events/i)).toBeInTheDocument();
  });

  test('donation buttons are present', () => {
    renderWithProviders(<App />);

    const donateButtons = screen.getAllByText(/donate now/i);
    expect(donateButtons.length).toBeGreaterThan(0);
  });
});

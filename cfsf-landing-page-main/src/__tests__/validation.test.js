import { validateEmail, validateRequired, validateAmount, validateForm } from '../utils/validation';

describe('Validation Utils', () => {
  describe('validateEmail', () => {
    test('validates correct email addresses', () => {
      const validEmails = ['test@example.com', 'user.name@domain.co.uk', 'user+tag@example.org'];

      validEmails.forEach((email) => {
        const result = validateEmail(email);
        expect(result.isValid).toBe(true);
        expect(result.message).toBe('');
      });
    });

    test('invalidates incorrect email addresses', () => {
      const invalidEmails = ['invalid-email', '@domain.com', 'user@', 'user@domain'];

      invalidEmails.forEach((email) => {
        const result = validateEmail(email);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Please enter a valid email address');
      });
    });
  });

  describe('validateRequired', () => {
    test('validates non-empty values', () => {
      const validValues = ['test', 'hello world', '123', 0];

      validValues.forEach((value) => {
        const result = validateRequired(value, 'Test Field');
        expect(result.isValid).toBe(true);
        expect(result.message).toBe('');
      });
    });

    test('invalidates empty values', () => {
      const invalidValues = ['', '   ', null, undefined];

      invalidValues.forEach((value) => {
        const result = validateRequired(value, 'Test Field');
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Test Field is required');
      });
    });
  });

  describe('validateAmount', () => {
    test('validates positive numbers', () => {
      const validAmounts = ['10', '25.50', '100', '1000.99'];

      validAmounts.forEach((amount) => {
        const result = validateAmount(amount);
        expect(result.isValid).toBe(true);
        expect(result.message).toBe('');
      });
    });

    test('invalidates non-positive numbers', () => {
      const invalidAmounts = ['0', '-10', 'abc', '', '0.00'];

      invalidAmounts.forEach((amount) => {
        const result = validateAmount(amount);
        expect(result.isValid).toBe(false);
        expect(result.message).toBe('Please enter a valid donation amount');
      });
    });
  });

  describe('validateForm', () => {
    test('validates complete form data', () => {
      const validFormData = {
        name: 'John Doe',
        email: 'john@example.com',
        amount: '50',
        message: 'Test message',
      };

      const result = validateForm(validFormData, ['name', 'email', 'amount']);
      expect(result.isValid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });

    test('returns errors for invalid form data', () => {
      const invalidFormData = {
        name: '',
        email: 'invalid-email',
        amount: '0',
        message: '',
      };

      const result = validateForm(invalidFormData, ['name', 'email', 'amount']);
      expect(result.isValid).toBe(false);
      expect(result.errors.name).toBe('name is required');
      expect(result.errors.email).toBe('Please enter a valid email address');
      expect(result.errors.amount).toBe('Please enter a valid donation amount');
    });
  });
});

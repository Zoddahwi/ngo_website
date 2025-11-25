/**
 * Utility functions for validation
 */

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email),
    message: !emailRegex.test(email) ? 'Please enter a valid email address' : '',
  };
};

export const validateRequired = (value, fieldName) => {
  const isValid = value && value.toString().trim() !== '';
  return {
    isValid,
    message: !isValid ? `${fieldName} is required` : '',
  };
};

export const validateAmount = (amount) => {
  const numAmount = parseFloat(amount);
  const isValid = !isNaN(numAmount) && numAmount > 0;
  return {
    isValid,
    message: !isValid ? 'Please enter a valid donation amount' : '',
  };
};

export const validateForm = (formData, requiredFields = []) => {
  const errors = {};
  let isValid = true;

  // Validate required fields
  requiredFields.forEach((field) => {
    const validation = validateRequired(formData[field], field);
    if (!validation.isValid) {
      errors[field] = validation.message;
      isValid = false;
    }
  });

  // Validate email if present
  if (formData.email) {
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.message;
      isValid = false;
    }
  }

  // Validate amount if present
  if (formData.amount) {
    const amountValidation = validateAmount(formData.amount);
    if (!amountValidation.isValid) {
      errors.amount = amountValidation.message;
      isValid = false;
    }
  }

  return { isValid, errors };
};

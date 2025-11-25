import { useState, useCallback } from 'react';
import { validateForm } from '../utils/validation';

/**
 * Custom hook for form management with validation
 */
export const useForm = (initialValues = {}, requiredFields = []) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback(
    (e) => {
      const { name, value, type, checked } = e.target;
      const fieldValue = type === 'checkbox' ? checked : value;

      setFormData((prev) => ({
        ...prev,
        [name]: fieldValue,
      }));

      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    },
    [errors]
  );

  const setFieldValue = useCallback(
    (name, value) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear error for this field
      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    },
    [errors]
  );

  const validateField = useCallback(
    (fieldName) => {
      const validation = validateForm(
        { [fieldName]: formData[fieldName] },
        requiredFields.includes(fieldName) ? [fieldName] : []
      );

      if (!validation.isValid) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: validation.errors[fieldName],
        }));
      }

      return validation.isValid;
    },
    [formData, requiredFields]
  );

  const validateAll = useCallback(() => {
    const validation = validateForm(formData, requiredFields);
    setErrors(validation.errors);
    return validation.isValid;
  }, [formData, requiredFields]);

  const handleSubmit = useCallback(
    (onSubmit) => {
      return async (e) => {
        e.preventDefault();

        if (!validateAll()) {
          return;
        }

        setIsSubmitting(true);
        try {
          await onSubmit(formData);
        } catch (error) {
          console.error('Form submission error:', error);
        } finally {
          setIsSubmitting(false);
        }
      };
    },
    [formData, validateAll]
  );

  const resetForm = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setIsSubmitting(false);
  }, [initialValues]);

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    setFieldValue,
    validateField,
    validateAll,
    handleSubmit,
    resetForm,
  };
};

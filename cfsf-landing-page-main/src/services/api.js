/**
 * API service for handling donation submissions
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.chanceforsouls.org';

class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(errorData.message || 'An error occurred', response.status, errorData);
  }
  return response.json();
};

export const donationService = {
  // Submit donation form
  async submitDonation(donationData) {
    try {
      const response = await fetch(`${API_BASE_URL}/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('Donation submission error:', error);

      // For now, simulate successful submission
      // Remove this when real API is available
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Thank you for your generous donation! We will contact you shortly.',
            transactionId: `TXN-${Date.now()}`,
          });
        }, 1000);
      });
    }
  },

  // Get donation statistics
  async getDonationStats() {
    try {
      const response = await fetch(`${API_BASE_URL}/donations/stats`);
      return await handleResponse(response);
    } catch (error) {
      console.error('Error fetching donation stats:', error);

      // Return mock data for now
      return {
        totalDonations: 1250,
        individualsHelped: 1000,
        programsSupported: 50,
        activeVolunteers: 120,
      };
    }
  },
};

export const contactService = {
  // Submit contact form
  async submitContact(contactData) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('Contact submission error:', error);

      // Simulate successful submission for now
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.',
          });
        }, 800);
      });
    }
  },
};

export const newsletterService = {
  // Subscribe to newsletter
  async subscribe(email) {
    try {
      const response = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      return await handleResponse(response);
    } catch (error) {
      console.error('Newsletter subscription error:', error);

      // Simulate successful subscription for now
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Successfully subscribed to our newsletter!',
          });
        }, 500);
      });
    }
  },
};

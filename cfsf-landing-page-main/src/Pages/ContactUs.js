import React from 'react';
import { useForm } from '../hooks';
import { contactService } from '../services/api';
import { SectionErrorBoundary } from '../components/common/ErrorBoundary';
import { SOCIAL_LINKS, SITE_CONFIG } from '../constants';
import './ContactUs.css';

export default function ContactUs() {
  const { formData, errors, isSubmitting, handleChange, handleSubmit, resetForm } = useForm(
    { name: '', email: '', subject: '', message: '' },
    ['name', 'email', 'message']
  );

  const onSubmit = async (data) => {
    const res = await contactService.submitContact(data);
    if (res?.success) {
      alert(res.message);
      resetForm();
    }
  };

  return (
    <main className="contact-page">
      {/* Modern Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            We'd love to hear from you. Whether you have a question, want to partner with us,
            or need support, we're here to help.
          </p>
          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="stat-icon">📧</div>
              <div className="stat-text">Quick Response</div>
            </div>
            <div className="hero-stat-item">
              <div className="stat-icon">🤝</div>
              <div className="stat-text">Partnership Ready</div>
            </div>
            <div className="hero-stat-item">
              <div className="stat-icon">💚</div>
              <div className="stat-text">Always Caring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="contact-container">

          {/* Contact Cards Row */}
          <div className="contact-cards-row">
            {/* Email Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrapper">
                <div className="card-icon">📧</div>
              </div>
              <h3>Email Us</h3>
              <p>info@chanceforsouls.org</p>
              <a href="mailto:info@chanceforsouls.org" className="card-link">Send Email →</a>
            </div>

            {/* Phone Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrapper">
                <div className="card-icon">📱</div>
              </div>
              <h3>Call Us</h3>
              <p>+233 54 559 2926</p>
              <a href="tel:+233545592926" className="card-link">Call Now →</a>
            </div>

            {/* Location Card */}
            <div className="contact-info-card">
              <div className="card-icon-wrapper">
                <div className="card-icon">📍</div>
              </div>
              <h3>Visit Us</h3>
              <p>Accra, Ghana</p>
              <a
                href="https://maps.app.goo.gl/KjTQY73iQtWpubov6"
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                View on Map →
              </a>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: '#9ca3af' }}>
                Western Region Projects
              </p>
            </div>
          </div>

          {/* Main Form and Sidebar */}
          <div className="contact-main-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              <SectionErrorBoundary sectionName='Contact Form'>
                <form onSubmit={handleSubmit(onSubmit)} className="modern-contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor='name'>Full Name *</label>
                      <input
                        id='name'
                        name='name'
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='John Doe'
                        className="form-input"
                      />
                      {errors.name && <p className='error-text'>{errors.name}</p>}
                    </div>

                    <div className="form-group">
                      <label htmlFor='email'>Email Address *</label>
                      <input
                        id='email'
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='you@example.com'
                        className="form-input"
                      />
                      {errors.email && <p className='error-text'>{errors.email}</p>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor='subject'>Subject</label>
                    <input
                      id='subject'
                      name='subject'
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder='How can we help you?'
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor='message'>Message *</label>
                    <textarea
                      id='message'
                      name='message'
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder='Tell us more about your inquiry...'
                      className="form-textarea"
                    />
                    {errors.message && <p className='error-text'>{errors.message}</p>}
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='submit-button'
                  >
                    {isSubmitting ? (
                      <>
                        <span className="button-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="button-arrow">→</span>
                      </>
                    )}
                  </button>
                </form>
              </SectionErrorBoundary>
            </div>

            {/* Sidebar */}
            <div className="contact-sidebar">
              {/* Social Media */}
              <div className="sidebar-card">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for updates and stories</p>
                <div className="social-links-grid">
                  {SOCIAL_LINKS.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      aria-label={s.name}
                      className='social-link-modern'
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={s.icon} alt={s.name} />
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div className="sidebar-card">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday</span>
                    <span className="time">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Support */}
              <div className="sidebar-card highlight-card">
                <div className="highlight-icon">💚</div>
                <h3>Need Immediate Help?</h3>
                <p>
                  If you're experiencing a mental health crisis, please reach out to
                  local emergency services or a crisis helpline immediately.
                </p>
                <a href="tel:+233545592926" className="emergency-button">
                  Crisis Hotline
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

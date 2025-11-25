import React from 'react';
import './Footer.css';

const Footer = () => {
  const goToDonation = () => {
    window.location.href = '/Donate#donation';
  };

  return (
    <footer className='modern-footer'>
      <div className='footer-container'>
        {/* Top Section */}
        <div className='footer-top'>
          <div className='footer-brand'>
            <img src='images/Logo_cfs_new.svg' alt='Chance for Souls Foundation Logo' className='footer-logo' />
            <p className='footer-tagline'>
              Making a difference in mental health and community wellbeing
            </p>
            <div className='footer-social'>
              <a href='https://web.facebook.com/chanceforsouls' target='_blank' rel='noopener noreferrer' aria-label='Facebook' className='social-link'>
                <img src='images/icon-facebook.svg' alt='Facebook' />
              </a>
              <a href='https://www.instagram.com/chance_for_souls/' target='_blank' rel='noopener noreferrer' aria-label='Instagram' className='social-link'>
                <img src='images/icon-instagram.svg' alt='Instagram' />
              </a>
              <a href='#twitter' aria-label='Twitter' className='social-link'>
                <img src='images/icon-twitter.svg' alt='Twitter' />
              </a>
              <a href='#youtube' aria-label='YouTube' className='social-link'>
                <img src='images/icon-youtube.svg' alt='YouTube' />
              </a>
            </div>
          </div>

          <div className='footer-links'>
            <div className='footer-column'>
              <h3>Quick Links</h3>
              <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/About'>About Us</a></li>
                <li><a href='/Blog'>Blog</a></li>
                <li><a href='/ContactUs'>Contact</a></li>
              </ul>
            </div>

            <div className='footer-column'>
              <h3>Get Involved</h3>
              <ul>
                <li><a href='/Donate'>Donate</a></li>
                <li><a href='#volunteer'>Volunteer</a></li>
                <li><a href='#partner'>Partner With Us</a></li>
                <li><a href='#events'>Events</a></li>
              </ul>
            </div>

            <div className='footer-column'>
              <h3>Resources</h3>
              <ul>
                <li><a href='#support'>Support</a></li>
                <li><a href='#privacy'>Privacy Policy</a></li>
                <li><a href='#terms'>Terms of Service</a></li>
                <li><a href='#faq'>FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className='footer-cta'>
            <h3>Support Our Mission</h3>
            <p>Your contribution helps us provide mental health support and community empowerment.</p>
            <button className='footer-donate-btn' onClick={goToDonation}>
              Donate Now
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='footer-bottom'>
          <p className='copyright'>
            © {new Date().getFullYear()} Chance for Souls Foundation. All Rights Reserved.
          </p>
          <p className='developed-by'>
            Built with ❤️ for mental health awareness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

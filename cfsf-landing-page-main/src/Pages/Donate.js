import React from 'react';
import { SectionErrorBoundary } from '../components/common/ErrorBoundary';
import Donation from '../components/Donation';
import './Donate.css';

const impactStats = [
  { number: '300+', label: 'Students Reached', icon: '🎓' },
  { number: '6', label: 'Trained Advocates', icon: '👥' },
  { number: '3', label: 'School Programs', icon: '🏫' },
  { number: '2', label: 'Major Projects', icon: '🏗️' }
];

const impactAreas = [
  {
    icon: '💚',
    title: 'Mental Health Support',
    description: 'Professional counseling and therapy services for individuals struggling with mental health challenges.',
    impact: 'Lives transformed through care'
  },
  {
    icon: '🎓',
    title: 'School Outreach',
    description: 'Educational programs teaching students about emotional wellbeing and mental health awareness.',
    impact: '300+ students impacted'
  },
  {
    icon: '🏥',
    title: 'Infrastructure Development',
    description: 'Building rehabilitation facilities and community bridges to serve underserved areas.',
    impact: 'Communities empowered'
  },
  {
    icon: '📚',
    title: 'Resources & Training',
    description: 'Providing books, materials, and training for advocates to deliver effective support.',
    impact: 'Knowledge shared widely'
  }
];

const videos = [
  {
    id: 'cfs',
    title: 'A Chance to Smile Again',
    src: 'videos/CFS_video.mp4',
    description: 'See how your support helps restore hope and dignity through counseling and community care.',
  },
  {
    id: 'gnw',
    title: 'Growing New Wings',
    src: 'videos/GNW_R.mp4',
    description: 'Young people share how mentorship and skills training opened doors to brighter futures.',
  },
  {
    id: 'ngo',
    title: 'Together We Rise',
    src: 'videos/NGO_work.mp4',
    description: 'Communities coming together to uplift the vulnerable—this is the impact you make possible.',
  },
];

const VideoCard = ({ video }) => (
  <article className='modern-video-card'>
    <div className='video-wrapper'>
      <video controls className='video-player'>
        <source src={video.src} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className='video-content'>
      <h3 className='video-title'>{video.title}</h3>
      <p className='video-description'>{video.description}</p>
    </div>
  </article>
);

export default function Donate() {
  const onDonateClick = () => {
    const el = document.getElementById('give');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className='donate-page'>
      {/* Hero Section */}
      <section className='donate-hero'>
        <div className='donate-hero-overlay'></div>
        <div className='donate-hero-content'>
          <h1 className='donate-hero-title'>Your Gift Changes Lives</h1>
          <p className='donate-hero-subtitle'>
            Every contribution makes a real difference in the lives of individuals and communities across Ghana.
            Join us in transforming lives through mental health support and community empowerment.
          </p>
          <div className='hero-cta-buttons'>
            <button onClick={onDonateClick} className='hero-donate-btn'>
              <span className='btn-icon'>💚</span>
              <span>Donate Now</span>
            </button>
            <a href='#impact' className='hero-learn-btn'>
              See Our Impact
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className='impact-stats-banner'>
        <div className='donate-container'>
          <div className='stats-grid-donate'>
            {impactStats.map((stat, index) => (
              <div key={index} className='stat-item-donate'>
                <div className='stat-icon-donate'>{stat.icon}</div>
                <div className='stat-number-donate'>{stat.number}</div>
                <div className='stat-label-donate'>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section id='impact' className='impact-areas-section'>
        <div className='donate-container'>
          <div className='section-header-center'>
            <h2 className='section-title-donate'>Where Your Donation Goes</h2>
            <p className='section-subtitle-donate'>
              Your contribution directly supports these vital programs and initiatives
            </p>
          </div>

          <div className='impact-grid'>
            {impactAreas.map((area, index) => (
              <div key={index} className='impact-card'>
                <div className='impact-icon-wrapper'>
                  <div className='impact-icon'>{area.icon}</div>
                </div>
                <h3 className='impact-card-title'>{area.title}</h3>
                <p className='impact-card-description'>{area.description}</p>
                <div className='impact-badge'>{area.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id='stories' className='stories-section'>
        <div className='donate-container'>
          <div className='section-header-center'>
            <h2 className='section-title-donate'>Impact Stories</h2>
            <p className='section-subtitle-donate'>
              Watch real stories of transformation and hope made possible by supporters like you
            </p>
          </div>

          <div className='videos-grid'>
            {videos.map((v) => (
              <VideoCard key={v.id} video={v} />
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id='give' className='donation-form-section'>
        <div className='donate-container'>
          <div className='section-header-center'>
            <h2 className='section-title-donate'>Make Your Contribution</h2>
            <p className='section-subtitle-donate'>
              Choose your donation amount and help us continue our mission
            </p>
          </div>

          <SectionErrorBoundary sectionName='Donate'>
            <Donation />
          </SectionErrorBoundary>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className='trust-section'>
        <div className='donate-container'>
          <div className='trust-content'>
            <div className='trust-badge-large'>
              <div className='trust-icon'>🛡️</div>
              <div className='trust-text'>
                <h3>Trusted & Transparent</h3>
                <p>100% of your donation goes directly to our programs</p>
              </div>
            </div>
            <div className='trust-features'>
              <div className='trust-feature'>
                <span className='feature-icon'>✓</span>
                <span>Secure payment processing</span>
              </div>
              <div className='trust-feature'>
                <span className='feature-icon'>✓</span>
                <span>Regular impact reports</span>
              </div>
              <div className='trust-feature'>
                <span className='feature-icon'>✓</span>
                <span>Tax-deductible receipts</span>
              </div>
              <div className='trust-feature'>
                <span className='feature-icon'>✓</span>
                <span>Full financial transparency</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

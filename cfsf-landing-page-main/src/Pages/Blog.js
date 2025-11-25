import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('all');

  // Real news and events from the website
  const newsItems = [
    {
      id: 'bridge-rehab',
      type: 'news',
      title: 'Bridge Construction & Rehabilitation Facility',
      date: 'Upcoming 2025',
      category: 'Infrastructure',
      image: null,
      gradient: true,
      icon: '🌉🏥',
      excerpt: 'CSF announces two major infrastructure projects in Western Region: a community bridge and mental health rehabilitation center.',
      link: '/news/bridge-rehab-projects'
    },
    {
      id: 'workshop-2024',
      type: 'event',
      title: 'Mental Health Advocates Training',
      date: 'June 29, 2024',
      category: 'Workshop',
      image: null,
      gradient: true,
      icon: '🎓',
      excerpt: 'Comprehensive training workshop equipping advocates with counseling skills and support systems for effective program delivery.',
      link: '/event/mental-health-workshop'
    },
    {
      id: 'power-words',
      type: 'event',
      title: 'The Power of Words Outreach Series',
      date: 'May 20-24, 2024',
      category: 'School Outreach',
      image: '/images/power_words_speaker.jpg',
      excerpt: 'Three-school outreach series teaching students about emotional wellbeing and the impact of words on mental health.',
      link: '/event/power-of-words-series'
    },
    {
      id: 'pentagon',
      type: 'event',
      title: 'Pentagon School Mental Health Outreach',
      date: '2024',
      category: 'School Outreach',
      image: '/images/pentagon_teaching_session.jpg',
      excerpt: 'Inspiring outreach program at Pentagon School promoting mental health and wellbeing through faith-based approaches.',
      link: '/event/pentagon-school-outreach'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? newsItems
    : newsItems.filter(item => item.type === activeTab);

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">News & Events</h1>
          <p className="blog-hero-subtitle">
            Stay updated with our latest programs, outreach activities, and announcements
          </p>

          {/* Tab Navigation */}
          <div className="blog-tabs">
            <button
              className={`blog-tab ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Updates
            </button>
            <button
              className={`blog-tab ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              News
            </button>
            <button
              className={`blog-tab ${activeTab === 'event' ? 'active' : ''}`}
              onClick={() => setActiveTab('event')}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="blog-content-section">
        <div className="blog-container">

          {/* Featured Item */}
          {filteredItems.length > 0 && (
            <div className="featured-section">
              <h2 className="section-heading">Featured</h2>
              <div
                className="featured-card"
                onClick={() => handleCardClick(filteredItems[0].link)}
              >
                {filteredItems[0].gradient ? (
                  <div className="featured-gradient">
                    <div className="featured-icon">{filteredItems[0].icon}</div>
                  </div>
                ) : (
                  <img
                    src={filteredItems[0].image}
                    alt={filteredItems[0].title}
                    className="featured-image"
                  />
                )}
                <div className="featured-content">
                  <div className="featured-meta">
                    <span className="category-badge">{filteredItems[0].category}</span>
                    <span className="date-text">{filteredItems[0].date}</span>
                  </div>
                  <h3 className="featured-title">{filteredItems[0].title}</h3>
                  <p className="featured-excerpt">{filteredItems[0].excerpt}</p>
                  <button className="read-more-btn">
                    Read Full Story
                    <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Recent Updates Grid */}
          {filteredItems.length > 1 && (
            <div className="recent-section">
              <h2 className="section-heading">Recent Updates</h2>
              <div className="blog-grid">
                {filteredItems.slice(1).map((item) => (
                  <div
                    key={item.id}
                    className="blog-card"
                    onClick={() => handleCardClick(item.link)}
                  >
                    {item.gradient ? (
                      <div className="card-gradient">
                        <div className="card-icon">{item.icon}</div>
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="card-image"
                      />
                    )}
                    <div className="card-content">
                      <div className="card-meta">
                        <span className="category-badge">{item.category}</span>
                        <span className="date-text">{item.date}</span>
                      </div>
                      <h3 className="card-title">{item.title}</h3>
                      <p className="card-excerpt">{item.excerpt}</p>
                      <div className="card-footer">
                        <span className="read-link">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="empty-state">
              <div className="empty-icon">📰</div>
              <h3>No {activeTab === 'all' ? 'updates' : activeTab === 'news' ? 'news' : 'events'} yet</h3>
              <p>Check back soon for new updates!</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="blog-cta">
            <div className="cta-content">
              <h3>Stay Connected</h3>
              <p>
                Don't miss out on our latest programs and updates. Follow us on social media
                or subscribe to our newsletter.
              </p>
              <div className="cta-buttons">
                <a href="/ContactUs" className="cta-btn primary">Get In Touch</a>
                <a href="/Donate" className="cta-btn secondary">Support Our Work</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Blog;

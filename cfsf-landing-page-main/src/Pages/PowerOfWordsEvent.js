import React from 'react';
import './EventDetail.css';

const PowerOfWordsEvent = () => {
    return (
        <div className="event-detail-page">
            {/* Hero Section */}
            <div className="event-hero-modern">
                <div className="hero-gradient-overlay"></div>
                <img
                    src="/images/power_words_speaker.jpg"
                    alt="Power of Words Outreach Speaker"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1
                    }}
                />
                <div className="hero-content-modern">
                    <div className="event-badge">Outreach Series • May 2024</div>
                    <h1 className="event-title-modern">The Power of Words</h1>
                    <p className="event-tagline">Words Matter; You Could Be Harming a Soul</p>
                    <div className="event-meta-modern">
                        <div className="meta-item">
                            <span className="meta-icon">📍</span>
                            <span>3 Schools</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">📅</span>
                            <span>May 20-24, 2024</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">👥</span>
                            <span>300+ Students Reached</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="event-modern-wrapper">
                <div className="event-modern-container">

                    {/* Quick Stats */}
                    <section className="stats-overview">
                        <div className="stat-box">
                            <div className="stat-number-lg">3</div>
                            <div className="stat-label-lg">Schools Visited</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">300+</div>
                            <div className="stat-label-lg">Students Impacted</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">5</div>
                            <div className="stat-label-lg">Days Duration</div>
                        </div>
                    </section>

                    {/* Program Overview */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Program Overview</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="content-card-modern">
                            <div className="card-icon">💬</div>
                            <h3>Theme</h3>
                            <p className="lead-text">
                                Words Matter; You Could Be Harming a Soul
                            </p>
                        </div>

                        <div className="content-grid-2">
                            <div className="info-card">
                                <h4>Led By</h4>
                                <p className="highlight-name">Mrs. Evelyn Benjamin-Sampson</p>
                                <p className="subtitle-text">Founder, Chance for Souls Foundation</p>
                                <p className="subtitle-text">Author of "A 2nd Chance for Souls"</p>
                            </div>
                            <div className="info-card">
                                <h4>Focus Areas</h4>
                                <p>
                                    Teaching students about self-worth, emotional resilience, and how words can
                                    either harm or heal. Highlighting the influence of words on emotional wellbeing
                                    and fostering a culture of kindness and respect.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Series Timeline */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Outreach Series</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="activity-timeline">
                            {/* Day 1 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">1</div>
                                <div className="timeline-content">
                                    <h3>Child Passion Academy</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        📅 May 20, 2024 • 8:00 AM
                                    </p>
                                    <p>
                                        The first outreach program engaged pupils in a dynamic discussion about the power
                                        of words. Students courageously shared personal experiences of how words had shaped
                                        their lives, both positively and negatively.
                                    </p>
                                    <div className="key-finding-box" style={{ marginTop: '1rem', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderLeft: '6px solid #f59e0b' }}>
                                        <div className="finding-icon">💡</div>
                                        <div className="finding-content">
                                            <h4 style={{ color: '#92400e' }}>Critical Intervention</h4>
                                            <p style={{ color: '#78350f' }}>
                                                A student disclosed her experience of sexual abuse during the session,
                                                leading to immediate counseling support. Educational materials promoting
                                                positive communication were distributed.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 2 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">2</div>
                                <div className="timeline-content">
                                    <h3>Great Nicobeth Academy</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        📅 May 22, 2024
                                    </p>
                                    <p>
                                        Students participated in a lively discussion on how words shape emotions and
                                        relationships. Several students approached facilitators for counseling on personal matters.
                                    </p>
                                    <div className="key-finding-box" style={{ marginTop: '1rem', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', borderLeft: '6px solid #f59e0b' }}>
                                        <div className="finding-icon">📖</div>
                                        <div className="finding-content">
                                            <h4 style={{ color: '#92400e' }}>Providing Hope</h4>
                                            <p style={{ color: '#78350f' }}>
                                                A student whose mother blamed her for her father's death received a copy of
                                                "A 2nd Chance for Souls," offering hope and healing. Tracts promoting emotional
                                                care and healthy communication were shared.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Day 3 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">3</div>
                                <div className="timeline-content">
                                    <h3>Novelty Montessori School</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        📅 May 24, 2024
                                    </p>
                                    <p>
                                        The final outreach session engaged pupils in discussions about the impact of their
                                        words on others. Students eagerly participated, offering insights into how they had
                                        experienced the power of words in their own lives.
                                    </p>
                                    <p style={{ marginTop: '1rem' }}>
                                        The event concluded with distribution of educational materials promoting the avoidance
                                        of emotional abuse and encouraging positive peer interactions. Both students and staff
                                        acknowledged the relevance of the theme in combating verbal bullying.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Key Outcomes */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Impact & Outcomes</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="outcomes-grid">
                            <div className="outcome-item">
                                <div className="outcome-icon">💭</div>
                                <h4>Emotional Awareness</h4>
                                <p>Students gained understanding of how words affect emotional wellbeing and mental health</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🤝</div>
                                <h4>Culture of Kindness</h4>
                                <p>Fostered respect and compassionate communication among students and peers</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🛡️</div>
                                <h4>Abuse Prevention</h4>
                                <p>Raised awareness about emotional abuse and verbal bullying in schools</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">💚</div>
                                <h4>Immediate Support</h4>
                                <p>Provided counseling and resources to students experiencing trauma and difficulties</p>
                            </div>
                        </div>
                    </section>

                    {/* Materials Distributed */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Resources Shared</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="results-grid">
                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">📚</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Educational Materials</h3>
                                <p>Tracts promoting positive communication, emotional awareness, and healthy relationships distributed to all participants</p>
                            </div>

                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">📖</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Book Distribution</h3>
                                <p>"A 2nd Chance for Souls" by Mrs. Benjamin-Sampson provided to students in need of hope and healing</p>
                            </div>

                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">🆘</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Counseling Support</h3>
                                <p>Immediate counseling provided to students who disclosed personal struggles and traumatic experiences</p>
                            </div>
                        </div>
                    </section>

                    {/* Photo Gallery */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Event Highlights</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <div style={{
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src="/images/power_words_session1.jpg"
                                    alt="Students in orange uniforms listening to presentation"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                                <div style={{ padding: '1rem', background: 'white' }}>
                                    <p style={{ margin: 0, fontWeight: 600, color: '#1f2937' }}>
                                        Engaged students during outreach session
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src="/images/power_words_session2.jpg"
                                    alt="Mrs. Sampson engaging with students outdoors"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                                <div style={{ padding: '1rem', background: 'white' }}>
                                    <p style={{ margin: 0, fontWeight: 600, color: '#1f2937' }}>
                                        Interactive discussions on the power of words
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src="/images/power_words_students.jpg"
                                    alt="Students attentively listening during session"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                                <div style={{ padding: '1rem', background: 'white' }}>
                                    <p style={{ margin: 0, fontWeight: 600, color: '#1f2937' }}>
                                        Students reflecting on emotional wellbeing
                                    </p>
                                </div>
                            </div>

                            <div style={{
                                borderRadius: '15px',
                                overflow: 'hidden',
                                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                transition: 'transform 0.3s ease'
                            }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                <img
                                    src="/images/power_words_session3.jpg"
                                    alt="Mrs. Sampson sharing message with students"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                                <div style={{ padding: '1rem', background: 'white' }}>
                                    <p style={{ margin: 0, fontWeight: 600, color: '#1f2937' }}>
                                        Sharing hope and encouragement with youth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="content-section">
                        <div className="conclusion-modern">
                            <h3>Lasting Impact</h3>
                            <p>
                                The "Words Matter" outreach series across Child Passion Academy, Great Nicobeth Academy,
                                and Novelty Montessori School was overwhelmingly successful. By addressing the power of
                                words and their impact on emotional wellbeing, the events fostered awareness about emotional
                                abuse, verbal bullying, and the importance of compassionate communication. The program not
                                only touched the hearts of many students but also provided them with tools and resources to
                                cope with difficult emotions and situations.
                            </p>
                            <div className="cta-group">
                                <a href="/Donate" className="btn-primary-modern">Support Our Outreach Programs</a>
                                <a href="/About" className="btn-secondary-modern">Learn More About Our Mission</a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PowerOfWordsEvent;

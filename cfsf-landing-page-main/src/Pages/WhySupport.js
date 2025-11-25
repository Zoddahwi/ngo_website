import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhySupport.css';

const WhySupport = () => {
    const navigate = useNavigate();

    const reasons = [
        {
            icon: '💚',
            title: 'Faith-Based Mental Health Care',
            description: 'We integrate spiritual guidance with professional mental health support, addressing both psychological and spiritual dimensions of wellbeing.',
            impact: 'Holistic healing approach'
        },
        {
            icon: '🎓',
            title: 'School Outreach Programs',
            description: 'Reaching students in schools across Ghana with mental health education, emotional wellness training, and counseling support.',
            impact: '850+ students impacted'
        },
        {
            icon: '🏥',
            title: 'Building Infrastructure',
            description: 'Developing a mental health rehabilitation facility and community bridge in Western Region to serve underserved communities.',
            impact: '1000+ lives to benefit'
        },
        {
            icon: '👥',
            title: 'Training Advocates',
            description: 'Equipping volunteers and counselors with professional skills to deliver effective mental health support in their communities.',
            impact: 'Growing network of advocates'
        },
        {
            icon: '📖',
            title: 'Resources & Literature',
            description: 'Distributing books, tracts, and educational materials that provide hope, healing, and practical guidance for mental wellness.',
            impact: 'Spreading hope through words'
        },
        {
            icon: '🤝',
            title: 'Community Support',
            description: 'Creating safe spaces for individuals to receive counseling, find community, and access resources for mental health recovery.',
            impact: 'Building supportive communities'
        }
    ];

    const impactStats = [
        { number: '4', label: 'Schools Reached', icon: '🏫' },
        { number: '850+', label: 'Students Impacted', icon: '👨‍🎓' },
        { number: '6', label: 'Trained Advocates', icon: '🎓' },
        { number: '2', label: 'Major Projects', icon: '🏗️' }
    ];

    const waysToDonate = [
        {
            type: 'One-Time Gift',
            icon: '💝',
            description: 'Make a single donation to support our programs and outreach activities.',
            cta: 'Donate Now'
        },
        {
            type: 'Monthly Partner',
            icon: '🔄',
            description: 'Become a recurring donor and provide sustainable support for our mission.',
            cta: 'Become a Partner'
        },
        {
            type: 'Sponsor a Project',
            icon: '🎯',
            description: 'Fund specific initiatives like the bridge construction or rehabilitation facility.',
            cta: 'Sponsor Project'
        },
        {
            type: 'In-Kind Donations',
            icon: '📦',
            description: 'Contribute materials, equipment, or resources for our programs and facilities.',
            cta: 'Contact Us'
        }
    ];

    return (
        <main className="why-support-page">
            {/* Hero Section */}
            <section className="support-hero">
                <div className="support-hero-overlay"></div>
                <div className="support-hero-content">
                    <h1 className="support-hero-title">Why Support Us?</h1>
                    <p className="support-hero-subtitle">
                        Your support transforms lives, restores hope, and builds a healthier future for communities across Ghana
                    </p>
                    <div className="hero-cta-group">
                        <button onClick={() => navigate('/Donate')} className="hero-btn primary">
                            Make a Difference Today
                        </button>
                        <button onClick={() => navigate('/About')} className="hero-btn secondary">
                            Learn Our Story
                        </button>
                    </div>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="impact-stats-section">
                <div className="support-container">
                    <h2 className="section-title-center">Our Impact So Far</h2>
                    <div className="stats-grid">
                        {impactStats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon-large">{stat.icon}</div>
                                <div className="stat-number-huge">{stat.number}</div>
                                <div className="stat-label-text">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Support Section */}
            <section className="reasons-section">
                <div className="support-container">
                    <h2 className="section-title-center">Six Reasons to Support Our Mission</h2>
                    <p className="section-subtitle">
                        Every contribution makes a real difference in the lives of individuals and communities
                    </p>

                    <div className="reasons-grid">
                        {reasons.map((reason, index) => (
                            <div key={index} className="reason-card">
                                <div className="reason-icon-wrapper">
                                    <div className="reason-icon">{reason.icon}</div>
                                </div>
                                <h3 className="reason-title">{reason.title}</h3>
                                <p className="reason-description">{reason.description}</p>
                                <div className="reason-impact">
                                    <span className="impact-badge">{reason.impact}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="testimonial-section">
                <div className="support-container">
                    <div className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <p className="testimonial-text">
                            The Chance for Souls Foundation's work goes beyond mental health support—it's about
                            restoring dignity, hope, and purpose to individuals who have been marginalized. Their
                            faith-based approach creates lasting transformation.
                        </p>
                        <div className="testimonial-author">
                            <div className="author-info">
                                <div className="author-name">Mrs. Evelyn Benjamin-Sampson</div>
                                <div className="author-title">Founder, Chance for Souls Foundation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ways to Give */}
            <section className="ways-to-give-section">
                <div className="support-container">
                    <h2 className="section-title-center">Ways to Give</h2>
                    <p className="section-subtitle">
                        Choose the giving option that works best for you
                    </p>

                    <div className="giving-grid">
                        {waysToDonate.map((way, index) => (
                            <div key={index} className="giving-card">
                                <div className="giving-icon">{way.icon}</div>
                                <h3 className="giving-type">{way.type}</h3>
                                <p className="giving-description">{way.description}</p>
                                <button
                                    onClick={() => navigate(way.cta === 'Contact Us' ? '/ContactUs' : '/Donate')}
                                    className="giving-btn"
                                >
                                    {way.cta} →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transparency Section */}
            <section className="transparency-section">
                <div className="support-container">
                    <div className="transparency-content">
                        <div className="transparency-text">
                            <h2>Transparency & Accountability</h2>
                            <p>
                                We are committed to using your donations responsibly and effectively. Every contribution
                                is tracked, and we provide regular updates on how funds are being used to advance our mission.
                            </p>
                            <ul className="transparency-list">
                                <li>✓ Regular financial reporting</li>
                                <li>✓ Clear project updates</li>
                                <li>✓ Impact measurement</li>
                                <li>✓ Donor communication</li>
                            </ul>
                        </div>
                        <div className="transparency-visual">
                            <div className="trust-badge">
                                <div className="badge-icon">🛡️</div>
                                <div className="badge-text">
                                    <div className="badge-title">Trusted</div>
                                    <div className="badge-subtitle">Non-Profit Organization</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-section">
                <div className="support-container">
                    <div className="final-cta-card">
                        <h2>Ready to Make an Impact?</h2>
                        <p>
                            Join us in transforming lives and building a healthier, more hopeful future for
                            communities across Ghana. Your support matters.
                        </p>
                        <div className="final-cta-buttons">
                            <button onClick={() => navigate('/Donate')} className="cta-btn-large primary">
                                Donate Now
                            </button>
                            <button onClick={() => navigate('/ContactUs')} className="cta-btn-large secondary">
                                Partner With Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default WhySupport;

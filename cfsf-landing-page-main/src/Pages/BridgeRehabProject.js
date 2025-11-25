import React from 'react';
import './EventDetail.css';

const BridgeRehabProject = () => {
    return (
        <div className="event-detail-page">
            {/* Hero Section */}
            <div className="event-hero-modern">
                <div className="hero-gradient-overlay"></div>
                <div className="hero-content-modern">
                    <div className="event-badge">Upcoming Projects • 2025</div>
                    <h1 className="event-title-modern">Building Hope & Infrastructure</h1>
                    <p className="event-tagline">Bridge Construction & Mental Health Rehabilitation Facility</p>
                    <div className="event-meta-modern">
                        <div className="meta-item">
                            <span className="meta-icon">🌉</span>
                            <span>Community Bridge</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">🏥</span>
                            <span>Rehabilitation Center</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">📍</span>
                            <span>Western Region, Ghana</span>
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
                            <div className="stat-number-lg">2</div>
                            <div className="stat-label-lg">Major Projects</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">1000+</div>
                            <div className="stat-label-lg">Lives Impacted</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">2025</div>
                            <div className="stat-label-lg">Target Launch</div>
                        </div>
                    </section>

                    {/* Project Overview */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Vision for Community Impact</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="content-card-modern">
                            <div className="card-icon">🎯</div>
                            <h3>Dual-Purpose Development</h3>
                            <p className="lead-text">
                                Chance for Souls Foundation is embarking on two transformative infrastructure projects
                                that will serve both physical and mental health needs of our communities
                            </p>
                        </div>
                    </section>

                    {/* Projects */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">The Projects</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="activity-timeline">
                            {/* Bridge Project */}
                            <div className="timeline-item">
                                <div className="timeline-marker">🌉</div>
                                <div className="timeline-content">
                                    <h3>Community Bridge Construction</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        📍 Location: Western Region, Ghana
                                    </p>

                                    <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: '#1f2937' }}>Project Overview</h4>
                                    <p>
                                        The construction of a vital bridge connecting communities in the Western Region of Ghana.
                                        This infrastructure project will provide safe passage for residents, students, and emergency
                                        services, particularly during the rainy season when many communities become isolated.
                                    </p>

                                    <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: '#1f2937' }}>Community Impact</h4>
                                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                        <li>Enable year-round access to schools, healthcare, and markets</li>
                                        <li>Reduce travel time and increase safety for daily commuters</li>
                                        <li>Facilitate emergency medical services and disaster response</li>
                                        <li>Boost economic activity by connecting rural areas to urban centers</li>
                                        <li>Support mental health by reducing community isolation</li>
                                    </ul>

                                    <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: '#1f2937' }}>Expected Benefits</h4>
                                    <div style={{
                                        background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                                        padding: '1.5rem',
                                        borderRadius: '10px',
                                        marginTop: '1rem',
                                        border: '1px solid rgba(47, 147, 29, 0.2)'
                                    }}>
                                        <p style={{ margin: 0, color: '#1d5e14', fontWeight: 600 }}>
                                            ✓ Serving 5,000+ residents directly<br />
                                            ✓ Connecting 3+ communities<br />
                                            ✓ Reducing isolation-related mental health issues<br />
                                            ✓ Improving access to CSF mental health programs
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Rehab Facility Project */}
                            <div className="timeline-item">
                                <div className="timeline-marker">🏥</div>
                                <div className="timeline-content">
                                    <h3>Mental Health Rehabilitation Facility</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        📍 Location: Western Region, Ghana
                                    </p>

                                    <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: '#1f2937' }}>Facility Overview</h4>
                                    <p>
                                        A dedicated mental health rehabilitation center designed to provide comprehensive care,
                                        counseling, and recovery support for individuals facing mental health challenges. This
                                        facility will integrate spiritual guidance with professional mental health services.
                                    </p>

                                    <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: '#1f2937' }}>Services Offered</h4>
                                    <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                        <li>Professional counseling and therapy sessions</li>
                                        <li>Group therapy and peer support programs</li>
                                        <li>Spiritual counseling and faith-based healing</li>
                                        <li>Life skills training and vocational rehabilitation</li>
                                        <li>Family counseling and reintegration support</li>
                                        <li>Emergency crisis intervention services</li>
                                    </ul>

                                    <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: '#1f2937' }}>Facility Features</h4>
                                    <div style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, 1fr)',
                                        gap: '1rem',
                                        marginTop: '1rem'
                                    }}>
                                        <div style={{
                                            background: 'white',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            border: '2px solid #2f931d'
                                        }}>
                                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛏️</div>
                                            <strong>Residential Units</strong>
                                            <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                                                Safe, comfortable accommodation for in-patient care
                                            </p>
                                        </div>
                                        <div style={{
                                            background: 'white',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            border: '2px solid #2f931d'
                                        }}>
                                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👨‍⚕️</div>
                                            <strong>Counseling Rooms</strong>
                                            <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                                                Private spaces for individual and group therapy
                                            </p>
                                        </div>
                                        <div style={{
                                            background: 'white',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            border: '2px solid #2f931d'
                                        }}>
                                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🙏</div>
                                            <strong>Prayer Chapel</strong>
                                            <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                                                Dedicated space for spiritual support and reflection
                                            </p>
                                        </div>
                                        <div style={{
                                            background: 'white',
                                            padding: '1rem',
                                            borderRadius: '10px',
                                            border: '2px solid #2f931d'
                                        }}>
                                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                                            <strong>Resource Center</strong>
                                            <p style={{ fontSize: '0.9rem', margin: '0.5rem 0 0 0' }}>
                                                Library and materials for mental health education
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why These Projects Matter */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Why These Projects Matter</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="outcomes-grid">
                            <div className="outcome-item">
                                <div className="outcome-icon">🤝</div>
                                <h4>Holistic Community Care</h4>
                                <p>Addressing both physical infrastructure needs and mental health support simultaneously</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🌍</div>
                                <h4>Reducing Isolation</h4>
                                <p>Physical connectivity through the bridge complements social connectivity through mental health services</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">💚</div>
                                <h4>Faith-Integrated Care</h4>
                                <p>Combining professional mental health services with spiritual support for comprehensive healing</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">📈</div>
                                <h4>Long-term Impact</h4>
                                <p>Creating sustainable infrastructure that will serve generations to come</p>
                            </div>
                        </div>
                    </section>

                    {/* Support Needed */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">How You Can Help</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="results-grid">
                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">💰</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Financial Donations</h3>
                                <p>Your financial contributions will directly fund construction materials, labor, and equipment for both projects</p>
                            </div>

                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">🏗️</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>In-Kind Support</h3>
                                <p>Donations of building materials, medical equipment, furniture, and other resources are greatly needed</p>
                            </div>

                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">🤝</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Partnership Opportunities</h3>
                                <p>Organizations and businesses can partner with us through sponsorships, grants, or technical expertise</p>
                            </div>
                        </div>

                        <div className="key-finding-box" style={{
                            marginTop: '2rem',
                            background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
                            borderLeft: '6px solid #2f931d'
                        }}>
                            <div className="finding-icon">🙏</div>
                            <div className="finding-content">
                                <h4 style={{ color: '#1d5e14' }}>Prayer & Advocacy</h4>
                                <p style={{ color: '#2f931d' }}>
                                    Join us in prayer for these projects and help spread awareness about the need for mental
                                    health infrastructure in rural Ghana. Your advocacy can help us secure the land and
                                    resources needed to make these projects a reality.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <section className="content-section">
                        <div className="conclusion-modern">
                            <h3>Building Bridges, Restoring Lives</h3>
                            <p>
                                These two projects represent the Chance for Souls Foundation's commitment to addressing
                                both the physical and mental health needs of communities in Ghana. The bridge will connect
                                people physically, while the rehabilitation facility will help restore broken lives and provide
                                hope to those struggling with mental health challenges. Together, these projects embody our
                                mission to give every soul a second chance.
                            </p>
                            <p style={{ marginTop: '1.5rem' }}>
                                <strong>Your support can make these life-changing projects a reality.</strong> Join us in
                                building infrastructure that heals both communities and souls.
                            </p>
                            <div className="cta-group">
                                <a href="/Donate" className="btn-primary-modern">Donate to These Projects</a>
                                <a href="/ContactUs" className="btn-secondary-modern">Partner With Us</a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default BridgeRehabProject;

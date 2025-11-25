import React from 'react';
import './LeaderProfile.css';

const DeaconessFaustinaProfile = () => {
    return (
        <div className="leader-profile-page">
            {/* Hero Section */}
            <div className="profile-hero">
                <div className="hero-content-grid">
                    <div className="profile-image-container">
                        <div className='profile-avatar-large'>DFA</div>
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">Deaconess Mrs Faustina Konadu Akomeah</h1>
                        <p className="profile-title">Marriage Counselor & Educational Coordinator</p>
                        <p className="profile-organization">Ghana Education Service | PIWC Ablekuma</p>
                        <p className="profile-subtitle">Church of Pentecost</p>
                        <div className="profile-badges">
                            <span className="badge">Marriage Counselor</span>
                            <span className="badge">Educator</span>
                            <span className="badge">Deaconess</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="profile-content-wrapper">
                <div className="profile-container">
                    {/* Introduction */}
                    <section className="profile-intro">
                        <h2>About</h2>
                        <p>
                            Deaconess Mrs Faustina Konadu Akomeah is a dedicated marriage counselor, therapist,
                            and educational coordinator who combines her expertise in teaching, counseling, and
                            faith-based ministry to serve families and children in her community.
                        </p>
                    </section>

                    {/* Education & Training */}
                    <section className="profile-section">
                        <h2>Education & Professional Training</h2>
                        <div className="education-grid">
                            <div className="education-item">
                                <div className="degree-icon">🎓</div>
                                <h3>MA in TESL</h3>
                                <p className="institution">Teaching of English as a Second Language</p>
                                <p className="institution">University of Ghana, Legon</p>
                            </div>

                            <div className="education-item">
                                <div className="degree-icon">💑</div>
                                <h3>Marriage Counselor Training</h3>
                                <p className="institution">Pentecost Theological Seminary</p>
                            </div>

                            <div className="education-item">
                                <div className="degree-icon">❤️</div>
                                <h3>Marriage Therapy Certification</h3>
                                <p className="institution">Counseling and Marriage Therapy</p>
                                <p className="institution">Pentecost University College</p>
                            </div>
                        </div>
                    </section>

                    {/* Professional Work */}
                    <section className="profile-section">
                        <h2>Professional Work</h2>
                        <div className="work-timeline">
                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Early Childhood Coordinator</h3>
                                    <p className="work-org">Ghana Education Service</p>
                                    <p className="work-period">Weija-Gbawe Municipal</p>
                                    <p>
                                        Coordinates early childhood education programs, ensuring quality education
                                        delivery and supporting the development of young learners across the municipality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Church Ministry */}
                    <section className="profile-section">
                        <h2>Church Ministry & Service</h2>
                        <div className="speaking-card">
                            <div className="speaking-icon">⛪</div>
                            <h3>Deaconess & Registrar</h3>
                            <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                PIWC Ablekuma (Church of Pentecost)
                            </p>
                            <p>
                                Serves as a deaconess and holds the position of Registrar to the School of Marriage
                                at PIWC Ablekuma. In this capacity, she coordinates marriage preparation programs,
                                provides counseling to couples, and supports the spiritual and relational wellbeing
                                of families in the congregation.
                            </p>
                        </div>
                    </section>

                    {/* Areas of Expertise */}
                    <section className="profile-section">
                        <h2>Areas of Expertise</h2>
                        <div className="interests-grid">
                            <div className="interest-tag">Marriage Counseling</div>
                            <div className="interest-tag">Marriage Therapy</div>
                            <div className="interest-tag">Early Childhood Education</div>
                            <div className="interest-tag">English Language Teaching</div>
                            <div className="interest-tag">Family Support</div>
                            <div className="interest-tag">Educational Coordination</div>
                        </div>
                    </section>

                    {/* Credentials */}
                    <section className="profile-section">
                        <h2>Professional Credentials</h2>
                        <div className="publications-card">
                            <div className="credentials-content" style={{ textAlign: 'center' }}>
                                <div className="credential-item" style={{ marginBottom: '1.5rem' }}>
                                    <div className="credential-icon" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                                    <h3>Certified Marriage Counselor</h3>
                                    <p>Pentecost Theological Seminary</p>
                                </div>
                                <div className="credential-item" style={{ marginBottom: '1.5rem' }}>
                                    <div className="credential-icon" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                                    <h3>Certified Marriage Therapist</h3>
                                    <p>Pentecost University College</p>
                                </div>
                                <div className="credential-item">
                                    <div className="credential-icon" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                                    <h3>Ghana Education Service Professional</h3>
                                    <p>Early Childhood Education Specialist</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Service Areas */}
                    <section className="profile-section">
                        <h2>Service Impact</h2>
                        <div className="outcomes-grid">
                            <div className="outcome-item">
                                <div className="outcome-icon">💑</div>
                                <h4>Marriage Enrichment</h4>
                                <p>Provides pre-marital and marital counseling to strengthen family foundations</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">👶</div>
                                <h4>Child Development</h4>
                                <p>Coordinates early childhood programs impacting young learners' growth</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">📚</div>
                                <h4>Educational Leadership</h4>
                                <p>Leads educational initiatives in Weija-Gbawe Municipal district</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🙏</div>
                                <h4>Faith-Based Ministry</h4>
                                <p>Serves families through church ministry and spiritual guidance</p>
                            </div>
                        </div>
                    </section>

                    {/* Family */}
                    <section className="profile-section family-section">
                        <h2>Family</h2>
                        <div className="family-card">
                            <div className="family-icon">👨‍👩‍👧‍👦</div>
                            <p>
                                Deaconess Faustina is married to <strong>Mr. Joseph Kankam Akomeah</strong>, and
                                together God has blessed them with <strong>2 children</strong>. Her commitment to
                                family values is reflected both in her personal life and her professional dedication
                                to strengthening marriages and supporting families through counseling and education.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DeaconessFaustinaProfile;

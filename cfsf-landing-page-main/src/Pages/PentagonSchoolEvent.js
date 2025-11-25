import React from 'react';
import './EventDetail.css';

const PentagonSchoolEvent = () => {
    return (
        <div className="event-detail-page">
            {/* Hero Section */}
            <div className="event-hero-modern">
                <div className="hero-gradient-overlay"></div>
                <img
                    src="/images/pentagon_teaching_session.jpg"
                    alt="Mental Health Training at Pentagon School"
                    className="hero-bg-image"
                />
                <div className="hero-content-modern">
                    <div className="event-badge">Outreach Program 2024</div>
                    <h1 className="event-title-modern">Pentagon School Outreach</h1>
                    <p className="event-tagline">Promoting Mental Health and Wellbeing through Faith</p>
                    <div className="event-meta-modern">
                        <div className="meta-item">
                            <span className="meta-icon">📍</span>
                            <span>Pentagon School, Junior High Dept.</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">👥</span>
                            <span>150+ Students Impacted</span>
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
                            <div className="stat-number-lg">150+</div>
                            <div className="stat-label-lg">Students Reached</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">3</div>
                            <div className="stat-label-lg">Key Sessions</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">100%</div>
                            <div className="stat-label-lg">Participation</div>
                        </div>
                    </section>

                    {/* Program Overview */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Program Overview</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="content-card-modern">
                            <div className="card-icon">🎯</div>
                            <h3>Theme</h3>
                            <p className="lead-text">
                                Promoting Mental Health and Wellbeing through Faith and Shared Experience
                            </p>
                        </div>

                        <div className="content-grid-2">
                            <div className="info-card">
                                <h4>Led By</h4>
                                <p className="highlight-name">Deaconess Evelyn Benjamin Sampson</p>
                                <p className="subtitle-text">Founder, Chance for Souls Foundation</p>
                                <p className="subtitle-text">Author of "Second Chance for the Soul"</p>
                            </div>
                            <div className="info-card">
                                <h4>Objective</h4>
                                <p>
                                    To promote mental health, emotional wellbeing, and spiritual growth among
                                    junior high school students through faith-based approaches and personal testimony.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Key Activities */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Key Activities</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="activity-timeline">
                            <div className="timeline-item">
                                <div className="timeline-marker">1</div>
                                <div className="timeline-content">
                                    <h3>Personal Testimony</h3>
                                    <p>
                                        Deaconess Sampson shared her powerful story of overcoming emotional trauma
                                        and rejection through faith, inspiring students to reflect on their own
                                        challenges and find hope in restoration.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker">2</div>
                                <div className="timeline-content">
                                    <h3>Interactive Assessment</h3>
                                    <p>
                                        Students participated in self-assessment activities using flipcharts labeled
                                        "Sad," "Moderate," and "Very Happy," helping them identify and express their
                                        current emotional states.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-marker">3</div>
                                <div className="timeline-content">
                                    <h3>Student Reflections</h3>
                                    <p>
                                        Participants shared personal experiences and wrote reflections on how the
                                        session impacted their understanding of mental health and spiritual wellbeing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Impact Results */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Impact Assessment</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="results-grid">
                            <div className="result-card positive">
                                <div className="result-icon">😊</div>
                                <div className="result-percentage">60%</div>
                                <div className="result-label">Very Happy</div>
                                <p>Students reported feeling very happy and optimistic about their future</p>
                            </div>

                            <div className="result-card moderate">
                                <div className="result-icon">😐</div>
                                <div className="result-percentage">32%</div>
                                <div className="result-label">Moderate</div>
                                <p>Students indicated moderate satisfaction with their current emotional state</p>
                            </div>

                            <div className="result-card attention">
                                <div className="result-icon">😔</div>
                                <div className="result-percentage">8%</div>
                                <div className="result-label">Needing Support</div>
                                <p>Students identified as needing additional emotional and mental health support</p>
                            </div>
                        </div>

                        <div className="key-finding-box">
                            <div className="finding-icon">⚠️</div>
                            <div className="finding-content">
                                <h4>Critical Observation</h4>
                                <p>
                                    A significant finding was that 8% of students identified their emotional state
                                    as "Sad," highlighting the importance of continued mental health support and
                                    intervention programs in schools.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Outcomes */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Key Outcomes</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="outcomes-grid">
                            <div className="outcome-item">
                                <div className="outcome-icon">💭</div>
                                <h4>Increased Awareness</h4>
                                <p>Students gained better understanding of mental health and emotional wellbeing</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🙏</div>
                                <h4>Hope & Resilience</h4>
                                <p>Personal testimony inspired hope and demonstrated pathways to healing</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🎯</div>
                                <h4>Early Identification</h4>
                                <p>Assessment helped identify students requiring additional support</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🤝</div>
                                <h4>Community Building</h4>
                                <p>Created safe space for students to share experiences and support each other</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="content-section">
                        <div className="conclusion-modern">
                            <h3>Moving Forward</h3>
                            <p>
                                The Pentagon School outreach program successfully demonstrated the effectiveness
                                of faith-based approaches to mental health promotion. The Chance for Souls Foundation
                                remains committed to continuing this vital work, reaching more students and creating
                                lasting positive impact in our communities.
                            </p>
                            <div className="cta-group">
                                <a href="/Donate" className="btn-primary-modern">Support Our Mission</a>
                                <a href="/About" className="btn-secondary-modern">Learn More</a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default PentagonSchoolEvent;

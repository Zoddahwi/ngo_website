import React from 'react';
import './EventDetail.css';

const MentalHealthWorkshop = () => {
    return (
        <div className="event-detail-page">
            {/* Hero Section */}
            <div className="event-hero-modern">
                <div className="hero-gradient-overlay"></div>
                <div className="hero-content-modern">
                    <div className="event-badge">Workshop • June 2024</div>
                    <h1 className="event-title-modern">Mental Health Advocates Training</h1>
                    <p className="event-tagline">Enhancing Skills and Support Systems for Effective Program Delivery</p>
                    <div className="event-meta-modern">
                        <div className="meta-item">
                            <span className="meta-icon">📍</span>
                            <span>CFS Office at CPA</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">📅</span>
                            <span>June 29, 2024</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-icon">👥</span>
                            <span>6 Participants</span>
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
                            <div className="stat-label-lg">Presentations</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">6</div>
                            <div className="stat-label-lg">Participants</div>
                        </div>
                        <div className="stat-box">
                            <div className="stat-number-lg">5hrs</div>
                            <div className="stat-label-lg">Duration</div>
                        </div>
                    </section>

                    {/* Workshop Overview */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Workshop Overview</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="content-card-modern">
                            <div className="card-icon">🎯</div>
                            <h3>Workshop Title</h3>
                            <p className="lead-text">
                                Equipping Mental Health Advocates: Enhancing Skills and Support Systems for Effective Program Delivery
                            </p>
                        </div>

                        <div className="content-grid-2">
                            <div className="info-card">
                                <h4>Objectives</h4>
                                <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                                    <li>Introduce general areas of engagement of CSF</li>
                                    <li>Familiarize members with the work plan document</li>
                                    <li>Introduce members to basic counseling skills</li>
                                </ul>
                            </div>
                            <div className="info-card">
                                <h4>Location</h4>
                                <p className="highlight-name">Chance for Souls Foundation Office</p>
                                <p className="subtitle-text">CPA (Child Passion Academy)</p>
                                <p style={{ marginTop: '1rem' }}>A focused training session for CSF team members and volunteers to enhance their advocacy and counseling capabilities.</p>
                            </div>
                        </div>
                    </section>

                    {/* Participants */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Participants</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="outcomes-grid">
                            <div className="outcome-item">
                                <div className="outcome-icon">👩‍💼</div>
                                <h4>Mrs. Evelyn Benjamin-Sampson</h4>
                                <p>Founder, Chance for Souls Foundation</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">👩‍🏫</div>
                                <h4>Mrs. Faustina Konadu Akomeah</h4>
                                <p>Marriage Counselor & Facilitator</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">👩‍💼</div>
                                <h4>Abigail Omari Wiafe</h4>
                                <p>Coordinator</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">👨‍💼</div>
                                <h4>Mr. Joseph Gyedu Cobbinah</h4>
                                <p>Advocate</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">👩</div>
                                <h4>Lois Gyedu</h4>
                                <p>Advocate</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">👩‍💼</div>
                                <h4>Mrs. Maribel Yeboah</h4>
                                <p>Advocate</p>
                            </div>
                        </div>
                    </section>

                    {/* Workshop Agenda */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Workshop Proceedings</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="activity-timeline">
                            {/* Opening */}
                            <div className="timeline-item">
                                <div className="timeline-marker">🙏</div>
                                <div className="timeline-content">
                                    <h3>Opening Session</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        ⏰ 10:00 AM
                                    </p>
                                    <p>
                                        Mrs. Maribel Yeboah led participants in an opening prayer, followed by an exhortation
                                        on "Knowing Your Purpose" grounded in Romans 8:28-31. This session inspired attendees
                                        by emphasizing the significance of understanding and fulfilling one's divine purpose.
                                    </p>
                                    <p style={{ marginTop: '1rem' }}>
                                        <strong>Intercessory Prayers focused on:</strong>
                                    </p>
                                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                                        <li>Firm establishment of the foundation</li>
                                        <li>Salvation of souls through CSF's efforts</li>
                                        <li>Securing donors and sponsors</li>
                                        <li>Acquiring land in Western Region for rehabilitation center</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Presentation 1 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">1</div>
                                <div className="timeline-content">
                                    <h3>Work Plan Presentation</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        Presented by: Abigail Omari-Wiafe (Coordinator)
                                    </p>
                                    <p>
                                        A detailed presentation covered the Foundation's work plan, including mission and
                                        vision statements, objectives, and goals.
                                    </p>
                                    <div className="key-finding-box" style={{ marginTop: '1rem', background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)', borderLeft: '6px solid #2f931d' }}>
                                        <div className="finding-icon">💡</div>
                                        <div className="finding-content">
                                            <h4 style={{ color: '#1d5e14' }}>Key Participant Suggestions</h4>
                                            <ul style={{ color: '#2f931d', paddingLeft: '1.5rem' }}>
                                                <li>Create feedback questionnaires for outreach events</li>
                                                <li>Organize community floats to distribute tracts</li>
                                                <li>Host public fitness events promoting mental health</li>
                                                <li>Include preventive methods in work plan</li>
                                                <li>Familiarize with national mental health policies</li>
                                                <li>Develop referral forms for advanced care transfers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Presentation 2 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">2</div>
                                <div className="timeline-content">
                                    <h3>Mental Health and Spirituality</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        Presented by: Mrs. Evelyn Benjamin-Sampson (Founder)
                                    </p>
                                    <p>
                                        A profound presentation on the intersection of Mental Health and Spirituality. Drawing
                                        from her personal story in "A 2nd Chance for Souls," Mrs. Sampson shared her experience
                                        of overcoming trauma through faith without medical intervention.
                                    </p>
                                    <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                                        Key themes emphasized the transformative power of spiritual redemption, the importance
                                        of spiritual support in mental health recovery, and the potent impact of words as spiritual
                                        entities requiring careful and compassionate communication.
                                    </p>
                                </div>
                            </div>

                            {/* Presentation 3 */}
                            <div className="timeline-item">
                                <div className="timeline-marker">3</div>
                                <div className="timeline-content">
                                    <h3>Counseling Fundamentals</h3>
                                    <p className="work-org" style={{ color: '#2f931d', marginBottom: '1rem' }}>
                                        Presented by: Mrs. Faustina Konadu Akomeah • Duration: 1 hour 20 minutes
                                    </p>
                                    <p>
                                        An in-depth exploration of counseling, defining it as a therapeutic relationship between
                                        a qualified counselor and a client.
                                    </p>
                                    <p style={{ marginTop: '1rem' }}>
                                        <strong>Topics Covered:</strong>
                                    </p>
                                    <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                                        <li>Principles of counseling</li>
                                        <li>Distinctions between counseling and guidance</li>
                                        <li>Ethical and legal considerations in counseling practice</li>
                                        <li>Basic counseling skills essential for effective support</li>
                                    </ul>
                                    <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                                        The presentation was enriched with practical demonstrations to ensure clear understanding.
                                    </p>
                                </div>
                            </div>

                            {/* Closing */}
                            <div className="timeline-item">
                                <div className="timeline-marker">🙏</div>
                                <div className="timeline-content">
                                    <h3>Closing Session</h3>
                                    <p>
                                        The workshop concluded with a closing prayer led by Mr. Joseph Gyedu Cobbinah,
                                        bringing the session to a reflective and solemn end.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Outcomes & Feedback */}
                    <section className="content-section bg-light">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Outcomes & Impact</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="results-grid">
                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">✅</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Objectives Met</h3>
                                <p>Successfully introduced participants to CSF's engagement areas, familiarized them with the work plan, and equipped them with essential counseling skills</p>
                            </div>

                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">💬</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Interactive Exchange</h3>
                                <p>Valuable suggestions shared aimed at enhancing future outreach programs and improving the foundation's impact</p>
                            </div>

                            <div className="result-card positive" style={{ borderTopColor: '#2f931d' }}>
                                <div className="result-icon">📈</div>
                                <h3 style={{ color: '#1f2937', marginBottom: '1rem' }}>Increased Confidence</h3>
                                <p>Participants reported increased confidence in their roles and renewed commitment to the foundation's mission</p>
                            </div>
                        </div>

                        <div className="key-finding-box" style={{ marginTop: '2rem', background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)', borderLeft: '6px solid #f59e0b' }}>
                            <div className="finding-icon">⭐</div>
                            <div className="finding-content">
                                <h4 style={{ color: '#92400e' }}>Participant Feedback</h4>
                                <p style={{ color: '#78350f' }}>
                                    Participants expressed appreciation for the comprehensive presentations and practical demonstrations.
                                    The personal testimonies and spiritual insights were particularly impactful, fostering a holistic
                                    understanding of mental health advocacy.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Follow-up Actions */}
                    <section className="content-section">
                        <div className="section-title-wrapper">
                            <h2 className="section-title-modern">Follow-Up Actions</h2>
                            <div className="title-underline"></div>
                        </div>

                        <div className="outcomes-grid">
                            <div className="outcome-item">
                                <div className="outcome-icon">📝</div>
                                <h4>Implement Suggestions</h4>
                                <p>Apply valuable participant suggestions to enhance outreach activities and program delivery</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">📅</div>
                                <h4>Plan Future Workshops</h4>
                                <p>Organize subsequent training sessions and community engagement events</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">🔄</div>
                                <h4>Continuous Improvement</h4>
                                <p>Refine support systems and resources to ensure effective program delivery</p>
                            </div>
                            <div className="outcome-item">
                                <div className="outcome-icon">📚</div>
                                <h4>Ongoing Education</h4>
                                <p>Provide continuous training to keep advocates current with best practices and policies</p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="content-section">
                        <div className="conclusion-modern">
                            <h3>Building Capacity for Impact</h3>
                            <p>
                                This comprehensive training workshop successfully equipped mental health advocates with the
                                knowledge, skills, and spiritual foundation needed to effectively support individuals in their
                                communities. Through presentations on work planning, the integration of mental health and spirituality,
                                and fundamental counseling skills, participants are now better prepared to deliver impactful programs
                                that address both the psychological and spiritual dimensions of mental wellbeing.
                            </p>
                            <div className="cta-group">
                                <a href="/Donate" className="btn-primary-modern">Support Our Training Programs</a>
                                <a href="/About" className="btn-secondary-modern">Join Our Team</a>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default MentalHealthWorkshop;

import React from 'react';
import '../Pages/LeaderProfile.css';

const MaryTobbinOseiProfile = () => {
    return (
        <main className="leader-profile-page">
            {/* Hero Section */}
            <section className="profile-hero">
                <div className="hero-content-grid">
                    <div className="profile-image-container">
                        <img
                            src="/images/mary_tobbin_osei.jpg"
                            alt="Mary Tobbin Osei"
                            className="profile-photo"
                        />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">Mary Tobbin Osei</h1>
                        <p className="profile-title">Social Development Consultant & Business Entrepreneur</p>
                        <p className="profile-subtitle">Board of Advisors - Chance for Souls Foundation</p>
                        <div className="profile-badges">
                            <span className="badge">Social Development Expert</span>
                            <span className="badge">CEO</span>
                            <span className="badge">Entrepreneur</span>
                            <span className="badge">Board Member</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="profile-content-wrapper">
                <div className="profile-container">

                    {/* Professional Overview */}
                    <div className="profile-section">
                        <h2>Professional Overview</h2>
                        <p className="profile-text">
                            Mary Tobbin Osei is a distinguished Social Development Consultant and Business Entrepreneur
                            with twenty-nine years of post-graduate experience working across government agencies,
                            private sector companies, and non-governmental organizations. Throughout her illustrious
                            career, Mary has dedicated herself to managing international development projects and
                            developing and managing local businesses that create lasting impact.
                        </p>
                    </div>

                    {/* Areas of Expertise */}
                    <div className="profile-section">
                        <h2>Key Areas of Expertise</h2>
                        <div className="education-grid">
                            <div className="education-item">
                                <div className="education-icon">📊</div>
                                <h3>Research, Monitoring & Evaluation</h3>
                                <p className="institution">Data-driven impact assessment and program evaluation</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">⚖️</div>
                                <h3>Gender & Social Inclusion</h3>
                                <p className="institution">Promoting equity and inclusive development</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">📋</div>
                                <h3>Program Design & Management</h3>
                                <p className="institution">Strategic planning and implementation</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">🏢</div>
                                <h3>Organizational Development</h3>
                                <p className="institution">Building capacity and institutional strengthening</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">📜</div>
                                <h3>Policy Analysis & Advocacy</h3>
                                <p className="institution">Evidence-based policy development</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">🤝</div>
                                <h3>Civil Society Support</h3>
                                <p className="institution">Strengthening community organizations</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">💼</div>
                                <h3>Youth Employment & Entrepreneurship</h3>
                                <p className="institution">Creating opportunities for young professionals</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">🎯</div>
                                <h3>Business Management</h3>
                                <p className="institution">Strategic business development and operations</p>
                            </div>
                        </div>
                    </div>

                    {/* Current Leadership Roles */}
                    <div className="profile-section highlight-section">
                        <h2>Current Leadership Positions</h2>

                        <div className="work-timeline">
                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>CEO & Managing Director</h3>
                                    <p className="work-org">Kanko Limited Company</p>
                                    <p>
                                        Leading strategic direction and operations of Kanko Limited, driving business
                                        growth and sustainable development initiatives.
                                    </p>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Founder & Executive Director</h3>
                                    <p className="work-org">Sustainable Development Alliance (SusDA)</p>
                                    <p>
                                        Established and leads SusDA, an organization dedicated to promoting sustainable
                                        development practices and community empowerment across Ghana.
                                    </p>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Director & Shareholder</h3>
                                    <p className="work-org">Amek Global</p>
                                    <p>
                                        Serves as one of the Directors and Shareholders of Amek Global, a construction
                                        company contributing to Ghana's infrastructure development.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Board Memberships */}
                    <div className="profile-section">
                        <h2>Board of Directors Memberships</h2>
                        <p className="profile-text">
                            Mary's extensive experience and expertise have led to her appointment on multiple
                            prestigious boards, where she provides strategic guidance and governance oversight:
                        </p>

                        <div className="talents-grid">
                            <div className="talent-card">
                                <div className="talent-icon">🏛️</div>
                                <h3>COLANDEF</h3>
                                <p>Board of Directors Member</p>
                            </div>

                            <div className="talent-card">
                                <div className="talent-icon">🤲</div>
                                <h3>Pentecost Social Services (PENTSOS)</h3>
                                <p>Board of Directors Member</p>
                            </div>

                            <div className="talent-card">
                                <div className="talent-icon">💳</div>
                                <h3>Mobipay Ltd</h3>
                                <p>Board of Directors Member</p>
                            </div>

                            <div className="talent-card">
                                <div className="talent-icon">💚</div>
                                <h3>Chance for Souls Foundation</h3>
                                <p>Board of Advisors Member</p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="profile-section">
                        <h2>Professional Journey</h2>
                        <div className="journey-card">
                            <div className="journey-icon">🌍</div>
                            <h3>29 Years of Impact</h3>
                            <p className="journey-subtitle">Transforming Communities Through Development</p>
                            <p className="journey-text">
                                Over nearly three decades, Mary has worked across diverse sectors including government
                                agencies, private companies, and non-governmental organizations. Her career has been
                                marked by a consistent commitment to social development, gender equality, and economic
                                empowerment.
                            </p>
                            <p className="journey-text">
                                Mary's work has spanned international development projects, where she has managed
                                complex initiatives, built organizational capacity, and advocated for policy changes
                                that benefit marginalized communities. Her expertise in monitoring and evaluation has
                                ensured that programs deliver measurable impact and sustainable results.
                            </p>
                        </div>
                    </div>

                    {/* Core Competencies */}
                    <div className="profile-section">
                        <h2>Core Competencies</h2>
                        <div className="vision-mission-grid">
                            <div className="vm-card">
                                <h3>Strategic Leadership</h3>
                                <p>
                                    Proven ability to lead organizations, manage teams, and drive strategic initiatives
                                    that create lasting social and economic impact.
                                </p>
                            </div>
                            <div className="vm-card">
                                <h3>Development Expertise</h3>
                                <p>
                                    Deep understanding of international development frameworks, gender mainstreaming,
                                    and inclusive growth strategies.
                                </p>
                            </div>
                            <div className="vm-card">
                                <h3>Business Acumen</h3>
                                <p>
                                    Successfully established and manages multiple businesses, demonstrating strong
                                    entrepreneurial skills and business management capabilities.
                                </p>
                            </div>
                            <div className="vm-card">
                                <h3>Governance & Oversight</h3>
                                <p>
                                    Extensive board experience providing strategic direction, ensuring compliance,
                                    and promoting organizational excellence.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Impact & Contributions */}
                    <div className="profile-section">
                        <h2>Impact & Contributions</h2>
                        <div className="foundation-card">
                            <p className="foundation-text">
                                Throughout her career, Mary has made significant contributions to social development
                                in Ghana and beyond. Her work in gender and social inclusion has helped create more
                                equitable opportunities for women and marginalized groups. Through her leadership of
                                SusDA and involvement with various organizations, she continues to champion sustainable
                                development practices that benefit communities.
                            </p>
                            <div className="foundation-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-number">29</span>
                                    <span className="highlight-label">Years Experience</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-number">4+</span>
                                    <span className="highlight-label">Board Positions</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-number">3</span>
                                    <span className="highlight-label">Companies Led</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-number">8+</span>
                                    <span className="highlight-label">Areas of Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Commitment to Chance for Souls */}
                    <div className="profile-section highlight-section">
                        <h2>Commitment to Chance for Souls Foundation</h2>
                        <div className="journey-card">
                            <div className="journey-icon">💚</div>
                            <h3>Supporting Mental Health & Community Empowerment</h3>
                            <p className="journey-text">
                                As a member of the Board of Advisors for Chance for Souls Foundation, Mary brings
                                her extensive experience in social development, program management, and organizational
                                development to support the foundation's mission. Her expertise in gender and social
                                inclusion, combined with her understanding of community empowerment, aligns perfectly
                                with the foundation's goals of providing mental wellness, emotional upliftment, and
                                socio-economic wellbeing to people in need.
                            </p>
                            <p className="journey-text">
                                Mary's strategic guidance helps ensure that the foundation's programs are well-designed,
                                effectively implemented, and create measurable impact in the communities they serve.
                                Her commitment to sustainable development and capacity building strengthens the
                                foundation's ability to achieve its vision of a world where every soul has a chance
                                to thrive.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Call to Action */}
            <section className="profile-cta">
                <div className="profile-container">
                    <div className="cta-content-profile">
                        <h2>Support Our Mission</h2>
                        <p>
                            Join Mary Tobbin Osei and the Chance for Souls Foundation team in transforming lives
                            through mental health support and community empowerment.
                        </p>
                        <div className="cta-buttons-profile">
                            <a href="/Donate" className="cta-btn-profile primary">Donate Now</a>
                            <a href="/ContactUs" className="cta-btn-profile secondary">Get In Touch</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MaryTobbinOseiProfile;

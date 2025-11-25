import React from 'react';
import './LeaderProfile.css';

const RevKwafoProfile = () => {
    return (
        <div className="leader-profile-page">
            {/* Hero Section */}
            <div className="profile-hero">
                <div className="hero-content-grid">
                    <div className="profile-image-container">
                        <img
                            src="/images/rev_kwafo_profile.jpg"
                            alt="Rev. Emmanuel Agyei Kwafo"
                            className="profile-photo"
                        />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">Rev. Emmanuel Agyei Kwafo</h1>
                        <p className="profile-title">National Patron - Home and Urban Missions</p>
                        <p className="profile-organization">Church of Pentecost</p>
                        <p className="profile-subtitle">Area Head for HO Area</p>
                        <div className="profile-badges">
                            <span className="badge">Conference Speaker</span>
                            <span className="badge">Author</span>
                            <span className="badge">Lecturer</span>
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
                            Rev. Emmanuel Agyei Kwafo is an ordained minister of the Church of Pentecost,
                            currently serving as the National Patron for the Home and Urban Missions, a
                            specialized Ministry of the church focused on the marginalized and the Area
                            Head for HO Area.
                        </p>
                    </section>

                    {/* Education */}
                    <section className="profile-section">
                        <h2>Education</h2>
                        <div className="education-grid">
                            <div className="education-item">
                                <div className="degree-icon">🎓</div>
                                <h3>MPhil in Leadership</h3>
                                <p className="institution">University for Professional Studies, Accra</p>
                            </div>

                            <div className="education-item">
                                <div className="degree-icon">📖</div>
                                <h3>MA in Theology and Missions</h3>
                                <p className="institution">Akrofi-Christaller Institute</p>
                            </div>

                            <div className="education-item">
                                <div className="degree-icon">📚</div>
                                <h3>Bachelor of Science Education</h3>
                                <p className="institution">University of Cape Coast</p>
                            </div>

                            <div className="education-item">
                                <div className="degree-icon">🏫</div>
                                <h3>Secondary Education</h3>
                                <p className="institution">Accra Academy, Accra</p>
                            </div>
                        </div>
                    </section>

                    {/* Ministry & Professional Work */}
                    <section className="profile-section">
                        <h2>Ministry & Professional Work</h2>
                        <div className="work-timeline">
                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>National Patron for Home and Urban Missions</h3>
                                    <p className="work-org">Church of Pentecost</p>
                                    <p>Leading a specialized Ministry focused on the marginalized and vulnerable populations.</p>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Area Head</h3>
                                    <p className="work-org">HO Area</p>
                                    <p>Providing spiritual leadership and oversight for the HO Area.</p>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Adjunct Lecturer</h3>
                                    <p className="work-org">Pentecost University</p>
                                    <p>Teaching and mentoring the next generation of ministry leaders.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Publications */}
                    <section className="profile-section">
                        <h2>Publications & Scholarship</h2>
                        <div className="publications-card">
                            <div className="pub-stats">
                                <div className="stat-item">
                                    <div className="stat-number">5</div>
                                    <div className="stat-label">Books Authored</div>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <div className="stat-number">Multiple</div>
                                    <div className="stat-label">Articles Published</div>
                                </div>
                            </div>
                            <p className="publications-note">
                                Rev. Kwafo is a prolific writer and scholar, contributing valuable insights
                                to theological and missiological discourse.
                            </p>
                        </div>
                    </section>

                    {/* Research Interests */}
                    <section className="profile-section">
                        <h2>Research Interests</h2>
                        <div className="interests-grid">
                            <div className="interest-tag">Missions Among the Marginalized</div>
                            <div className="interest-tag">Work with Vulnerable Populations</div>
                            <div className="interest-tag">Gender and Sexuality</div>
                            <div className="interest-tag">Leadership Development</div>
                            <div className="interest-tag">Emotional Intelligence</div>
                        </div>
                    </section>

                    {/* Speaking Engagements */}
                    <section className="profile-section">
                        <h2>Speaking Engagements</h2>
                        <div className="speaking-card">
                            <div className="speaking-icon">🎤</div>
                            <h3>Conference Speaker</h3>
                            <p>
                                Rev. Kwafo is a sought-after conference speaker both in Ghana and internationally,
                                sharing his expertise on missions, leadership, and faith-based social impact.
                            </p>
                        </div>
                    </section>

                    {/* Family */}
                    <section className="profile-section family-section">
                        <h2>Family</h2>
                        <div className="family-card">
                            <div className="family-icon">👨‍👩‍👧‍👦</div>
                            <p>
                                Emmanuel is married to <strong>Agartha</strong>, and together they are blessed
                                with three children: <strong>Ayeyi</strong>, <strong>Nyansah</strong>, and
                                <strong>Nyameaye</strong>.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RevKwafoProfile;

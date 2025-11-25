import React from 'react';
import '../Pages/LeaderProfile.css';
import '../Pages/EvelynProfile.css';

const EvelynProfile = () => {
    return (
        <main className="leader-profile-page">
            {/* Hero Section */}
            <section className="profile-hero">
                <div className="hero-content-grid">
                    <div className="profile-image-container">
                        <img
                            src="/images/Mrs Evelyn.jpg"
                            alt="Mrs. Evelyn Benjamin-Sampson"
                            className="profile-photo"
                        />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">Mrs. Evelyn Benjamin-Sampson</h1>
                        <p className="profile-title">Founder & Executive Director</p>
                        <p className="profile-subtitle">Chance for Souls Foundation</p>
                        <div className="profile-badges">
                            <span className="badge">Author</span>
                            <span className="badge">Counselor</span>
                            <span className="badge">Motivational Speaker</span>
                            <span className="badge">Singer & Songwriter</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="profile-content-wrapper">
                <div className="profile-container">

                    {/* Personal Background */}
                    <div className="profile-section">
                        <h2>Personal Background</h2>
                        <p className="profile-text">
                            Married with four children and a native of Ghana, Evelyn Benjamin-Sampson
                            (also known as Mrs. Evelyn Gyedu Cobbinah) is a remarkable woman whose life
                            journey embodies resilience, transformation, and unwavering commitment to
                            helping others find hope and healing.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="profile-section">
                        <h2>Education & Qualifications</h2>
                        <div className="education-grid">
                            <div className="education-item">
                                <div className="education-icon">🎓</div>
                                <h3>Master's Degree in Development Economics</h3>
                                <p className="institution">State University of Campinas, Brazil</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">📚</div>
                                <h3>B.A. Honours with French Major</h3>
                                <p className="institution">University of Cape Coast, Ghana</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">👨‍🏫</div>
                                <h3>Post-Secondary Teacher Training</h3>
                                <p className="institution">Mount Mary Teacher Training College</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">💼</div>
                                <h3>Gender, Labour and Development Expertise</h3>
                                <p className="institution">ILO International Training Centre - Turin, Italy & Vienna, Austria</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">🧠</div>
                                <h3>Executive Certificate in Counselling and Psychology</h3>
                                <p className="institution">ODUCCP, Ghana</p>
                            </div>

                            <div className="education-item">
                                <div className="education-icon">🌍</div>
                                <h3>Labour-Related Courses</h3>
                                <p className="institution">Geneva, Switzerland</p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="profile-section">
                        <h2>Professional Experience</h2>

                        <div className="work-timeline">
                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Teaching Career - 15 Years</h3>
                                    <p className="work-org">Junior High & Senior High Schools</p>
                                    <p>
                                        Taught French language at various educational institutions, shaping young minds
                                        and fostering cross-cultural understanding.
                                    </p>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Gender and Youth Coordinator - 16 Years</h3>
                                    <p className="work-org">Organisation of African Trade Union Unity (OATUU)</p>
                                    <p>
                                        Led initiatives focused on gender equality and youth empowerment across Africa,
                                        working with trade unions and workers' organizations.
                                    </p>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>International Work</h3>
                                    <p className="work-org">StreetNet International</p>
                                    <p>
                                        Served as Organizer, Consultant, and Resource Person, facilitating capacity-building
                                        workshops for workers across Africa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Global Impact */}
                    <div className="profile-section">
                        <h2>Global Representation</h2>
                        <p className="profile-text">
                            Evelyn has represented her organizations at various national and international
                            forums and meetings, including:
                        </p>
                        <div className="impact-locations">
                            <div className="location-item">
                                <span className="location-icon">🇨🇭</span>
                                <span>International Labour Conferences - Geneva, Switzerland</span>
                            </div>
                            <div className="location-item">
                                <span className="location-icon">🌍</span>
                                <span>High-Level Meetings across Africa, Asia, and South America</span>
                            </div>
                            <div className="location-grid">
                                <span className="country-tag">🇪🇬 Egypt</span>
                                <span className="country-tag">🇪🇹 Ethiopia</span>
                                <span className="country-tag">🇨🇳 China</span>
                                <span className="country-tag">🇰🇭 Cambodia</span>
                                <span className="country-tag">🇧🇷 Brazil</span>
                                <span className="country-tag">🇮🇳 India</span>
                            </div>
                        </div>
                    </div>

                    {/* Personal Journey */}
                    <div className="profile-section highlight-section">
                        <h2>A Journey of Transformation</h2>
                        <div className="journey-card">
                            <div className="journey-icon">📖</div>
                            <h3>Author: "A Second Chance for Souls"</h3>
                            <p className="journey-subtitle">Abused, Accused, Yet Rescued</p>
                            <p className="journey-text">
                                After surviving abuses from childhood and seventeen years of severe depression
                                and trauma as an adult, Evelyn transformed her pain into purpose. Her powerful
                                memoir chronicles her journey from darkness to light, offering hope to countless
                                others facing similar struggles.
                            </p>
                            <p className="journey-text">
                                This profound personal experience became the catalyst for establishing the
                                <strong> Chance for Souls Foundation</strong>, igniting her passion for professional
                                counseling and her unwavering commitment to promoting mental health in Ghana and beyond.
                            </p>
                        </div>
                    </div>

                    {/* Talents & Passions */}
                    <div className="profile-section">
                        <h2>Talents & Passions</h2>
                        <div className="talents-grid">
                            <div className="talent-card">
                                <div className="talent-icon">🎵</div>
                                <h3>Singer & Songwriter</h3>
                                <p>Uses music as a powerful tool for healing and inspiration</p>
                            </div>

                            <div className="talent-card">
                                <div className="talent-icon">🎤</div>
                                <h3>Motivational Speaker</h3>
                                <p>Inspires audiences with her story of resilience and hope</p>
                            </div>

                            <div className="talent-card">
                                <div className="talent-icon">💚</div>
                                <h3>Professional Counselor</h3>
                                <p>Provides compassionate support to those in mental health crisis</p>
                            </div>

                            <div className="talent-card">
                                <div className="talent-icon">🌟</div>
                                <h3>Mental Health Advocate</h3>
                                <p>Champions mental wellness across Ghana and internationally</p>
                            </div>
                        </div>
                    </div>

                    {/* Foundation Work */}
                    <div className="profile-section">
                        <h2>Chance for Souls Foundation</h2>
                        <div className="foundation-card">
                            <p className="foundation-text">
                                As <strong>Founder and Executive Director</strong> of Chance for Souls Foundation,
                                Evelyn leads the organization's mission to provide mental wellness, emotional upliftment,
                                healing, and socio-economic wellbeing to people in need.
                            </p>
                            <div className="foundation-highlights">
                                <div className="highlight-item">
                                    <span className="highlight-number">850+</span>
                                    <span className="highlight-label">Students Reached</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-number">6</span>
                                    <span className="highlight-label">Trained Advocates</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-number">4</span>
                                    <span className="highlight-label">School Programs</span>
                                </div>
                                <div className="highlight-item">
                                    <span className="highlight-number">2</span>
                                    <span className="highlight-label">Major Projects</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="profile-section">
                        <h2>Vision & Mission</h2>
                        <div className="vision-mission-grid">
                            <div className="vm-card">
                                <h3>Vision</h3>
                                <p>
                                    To create a society where mental health is prioritized, stigma is eliminated,
                                    and every individual has access to the support they need to heal and thrive.
                                </p>
                            </div>
                            <div className="vm-card">
                                <h3>Mission</h3>
                                <p>
                                    To provide comprehensive mental health support, counseling services, and community
                                    empowerment programs that restore hope, dignity, and purpose to individuals in need.
                                </p>
                            </div>
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
                            Join Mrs. Evelyn Benjamin-Sampson in transforming lives through mental health
                            support and community empowerment.
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

export default EvelynProfile;

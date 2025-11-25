import React from 'react';
import './LeaderProfile.css';

const DanielLediProfile = () => {
    return (
        <div className="leader-profile-page">
            {/* Hero Section */}
            <div className="profile-hero">
                <div className="hero-content-grid">
                    <div className="profile-image-container">
                        <img
                            src="/images/daniel_ledi_profile.jpg"
                            alt="Daniel Ledi"
                            className="profile-photo"
                        />
                    </div>
                    <div className="profile-info">
                        <h1 className="profile-name">Daniel Ledi</h1>
                        <p className="profile-title">Legal & Compliance Officer</p>
                        <p className="profile-organization">SUNU Assurances Ghana LTD</p>
                        <p className="profile-subtitle">Legal Practitioner | Business Executive</p>
                        <div className="profile-badges">
                            <span className="badge">Licensed Lawyer</span>
                            <span className="badge">Compliance Expert</span>
                            <span className="badge">Legal Advisor</span>
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
                            Daniel Ledi is a licensed legal practitioner in Ghana with a strong foundation
                            in both law and social sciences. He combines legal expertise with business acumen,
                            currently serving as Legal and Compliance Officer for SUNU Assurances Ghana LTD.
                        </p>
                    </section>

                    {/* Education */}
                    <section className="profile-section">
                        <h2>Education</h2>
                        <div className="education-grid">
                            <div className="education-item">
                                <div className="degree-icon">⚖️</div>
                                <h3>Professional Law Course</h3>
                                <p className="institution">Ghana School of Law</p>
                                <p className="year">2019 - 2021</p>
                            </div>

                            <div className="education-item">
                                <div className="degree-icon">📜</div>
                                <h3>Bachelor of Laws (LLB)</h3>
                                <p className="institution">University of Ghana</p>
                                <p className="year">2019</p>
                            </div>

                            <div className="education-item">
                                <div className="degree-icon">🎓</div>
                                <h3>BA Sociology and Philosophy</h3>
                                <p className="institution">University of Ghana</p>
                                <p className="year">2016</p>
                            </div>
                        </div>
                    </section>

                    {/* Professional Experience */}
                    <section className="profile-section">
                        <h2>Professional Experience</h2>
                        <div className="work-timeline">
                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Legal & Compliance Officer</h3>
                                    <p className="work-org">SUNU Assurances Ghana LTD</p>
                                    <p className="work-period">June 2023 - Present</p>
                                    <p>
                                        Ensuring regulatory compliance, managing legal risks, and providing
                                        legal advisory services for insurance operations. Responsible for
                                        corporate governance and compliance framework implementation.
                                    </p>
                                </div>
                            </div>

                            <div className="work-item">
                                <div className="work-marker"></div>
                                <div className="work-content">
                                    <h3>Legal Practitioner</h3>
                                    <p className="work-org">Addo, Addo (Legal Attorneys), Accra</p>
                                    <p className="work-period">2021 - Present</p>
                                    <p>
                                        Providing legal representation and advisory services to clients
                                        on various matters including corporate law, contracts, and litigation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Credentials */}
                    <section className="profile-section">
                        <h2>Professional Credentials</h2>
                        <div className="publications-card">
                            <div className="credentials-content">
                                <div className="credential-item">
                                    <div className="credential-icon">✓</div>
                                    <h3>Licensed to Practice Law in Ghana</h3>
                                    <p>Enrolled on the roll of Lawyers in Ghana</p>
                                </div>
                                <div className="credential-item">
                                    <div className="credential-icon">✓</div>
                                    <h3>Ghana Bar Association Member</h3>
                                    <p>Active member in good standing</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Practice Areas */}
                    <section className="profile-section">
                        <h2>Practice Areas</h2>
                        <div className="interests-grid">
                            <div className="interest-tag">Corporate Law</div>
                            <div className="interest-tag">Regulatory Compliance</div>
                            <div className="interest-tag">Insurance Law</div>
                            <div className="interest-tag">Contract Law</div>
                            <div className="interest-tag">Corporate Governance</div>
                            <div className="interest-tag">Risk Management</div>
                        </div>
                    </section>

                    {/* Vision */}
                    <section className="profile-section">
                        <h2>Professional Vision</h2>
                        <div className="speaking-card">
                            <div className="speaking-icon">🎯</div>
                            <h3>Future Goals</h3>
                            <p>
                                Daniel aims to become a top-of-the-mind legal practitioner and business
                                executive in Ghana within the next five years. He is committed to excellence
                                in legal practice while contributing to the growth of businesses through
                                sound legal and compliance frameworks.
                            </p>
                        </div>
                    </section>

                    {/* Academic Background */}
                    <section className="profile-section family-section">
                        <h2>Unique Perspective</h2>
                        <div className="family-card">
                            <div className="family-icon">📚</div>
                            <p>
                                With a unique background combining <strong>Sociology and Philosophy</strong>
                                with <strong>Law</strong>, Daniel brings a holistic perspective to legal
                                practice. His understanding of social structures and philosophical reasoning
                                enhances his ability to navigate complex legal and business challenges with
                                both analytical rigor and human insight.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default DanielLediProfile;

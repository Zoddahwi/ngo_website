import React from "react";

const Service = () => {
  return (
    <section className="service" id="about">
      <div className="container-sec">
        <div className="sec-intro">
          <h1> Why must you support Souls' fundation?</h1>
          <p>
            The Chance for Souls Foundation aims to provide sanity of mind,
            emotional upliftment, healing, and socio-economic wellbeing to
            people in need.
          </p>
        </div>
        <div className="sec-items">
          <div className="sec-item">
            <img src="images/business-partnership.svg" alt="Partnerships" />
            <h3>Partnerships</h3>
            <p>
              To provide platform where institutions and Community Based
              Organizations come together to work with people for prevention of
              acts that have the tendency to instigate Mental Health deficits in
              people, especially children and women; as well as foster effective
              management and restoration of hope and healing for those already
              affected.
            </p>
          </div>
          <div className="sec-item">
            <img src="images/announcement.svg" alt="Awareness" />
            <h3>Awareness creation Campaigns and Advocacies</h3>
            <p>
              Work with stakeholders to step up campaigns against threats to
              sound mind as we create awareness for prevention of practices that
              generate Mental Health challenges.
            </p>
          </div>
          <div className="sec-item">
            <img src="images/Counseling.svg" alt="counselling" />
            <h3>Counselling</h3>
            <p>
              To offer counselling where needed for prevention, management and
              recovery of persons suffering from depression/trauma.
            </p>
          </div>
          <div className="sec-item">
            <img src="images/charity.svg" alt="support" />
            <h3>Support</h3>
            <p>
              Emotional, financial and material support to identified
              individuals, persons or groups in need after recovery from Mental
              Health/emotional brokenness to re-settle them academically,
              economically and socially for positive productive living.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

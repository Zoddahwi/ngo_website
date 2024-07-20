import React from "react";

const Intro = () => {
  return (
    <section className="intro">
      <div className="contain">
        <div className="intro-text">
          <h1>CHANCE FOR SOULS’ FOUNDATION</h1>
          <p>
          The foundation seeks to help individuals lead fuller lives by offering them new-found strength and purpose.
          </p>
          <button className="intro-btn">Donate Now</button>
        </div>

        <div className="intro-img">
          <div className="mock-img">
            {/* <img src="images/image-mockups.png" alt="Phone" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

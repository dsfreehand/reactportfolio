import React from 'react';
import '../index.css';

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="about-me-content">
        <img
          src="/my-portfolio/assets/images/profile.jpg"
          alt="Daniel Sisson"
          className="profile-img"
        />
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>My name is Daniel Sisson, and I am a highly motivated engineer looking to make the move into software!</p>
          <p> I have been solving problems in medical device manufacturing for the last decade, and I'm looking to start solving software problems!</p>
          <p> I've always enjoyed coding, but until recently I've been limited to operations coding - microprocessors and simple user interfaces such as Microsoft Excel VBA.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

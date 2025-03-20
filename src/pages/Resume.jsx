import React from 'react';
import '../index.css';

const Resume = () => {
  return (
    <section id="resume">
      <h2 className="text-center mb-4">My Resume</h2>

      {/* Download Resume Section */}
      <div className="text-center mb-4">
        <a href="src/assets/Sisson Resume.pdf" download className="btn btn-primary">
          Download My Resume
        </a>
      </div>
      

      {/* Experience Section */}
      <div className="resume-section">
        <h3>Experience</h3>
        <ul>
          <li>
            <h4>Quality Engineer at Helmer Scientific</h4>
            <p>Developed Work Instructions and Work Aids using Microsoft Excel VBA</p>
          </li>
          <li>
            <h4>Quality Assurance Engineer at Beckman Coulter</h4>
            <p>Developed and Implemented API based Work Instructions and Work Aids using Python</p>
          </li>
          <li>
            <h4>Development Engineer at Catheter Research Inc</h4>
            <p>Developed and Implemented C++ based code for machinery</p>
          </li>
        </ul>
      </div>

      {/* Education Section */}
      <div className="resume-section">
        <h3>Education</h3>
        <ul>
          <li>
            <h4>Full Stack Web Development Bootcamp</h4>
            <p>Columbia University Bootcamp - 2024-2025</p>
          </li>
          <li>
            <h4>Bachelor of Science in Biomedical Engineering</h4>
            <p>Purdue University - 2009-2013</p>
          </li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="resume-section">
        <h3>Technical Skills</h3>
        <div className="skills-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Node.js</span>
          <span>Git</span>
          <span>Python</span>
          <span>C++</span>
          <span>SQL</span>
          <span>APIs</span>
          <span>Excel VBA</span>
        </div>
      </div>
    </section>
  );
};

export default Resume;

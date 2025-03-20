import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      image: "/my-portfolio/assets/images/project1.jpg",
      title: "Using Node.js and Inquirer to create a ReadMe File",
      deployedLink: "",
      githubLink: "https://github.com/dsfreehand/Module7Challenge"
    },
    {
      image: "/my-portfolio/assets/images/project2.jpg",
      title: "Using Node.js and SQL to Create and manipulate an Employee Database",
      deployedLink: "",
      githubLink: "https://github.com/dsfreehand/employee_tracker_db"
    },
    {
      image: "/my-portfolio/assets/images/project3.jpg",
      title: "Using Node.js and Inquirer to create and manipulate hypothetical vehicles",
      deployedLink: "",
      githubLink: "https://github.com/dsfreehand/choose_your_vehicle"
    },
    {
      image: "/my-portfolio/assets/images/BootcampPizza.jpg",
      title: "Hypothetical Pizza Restaurant Website using LocalStorage for Order History",
      deployedLink: "https://p1t1-group3.github.io/ProjectOne/",
      githubLink: "https://github.com/p1t1-group3"
    }
  ];

  return (
    <section id="portfolio" className="container my-5">
      <h2 className="text-center mb-4">My Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                {/* Conditionally render "View Deployed" button */}
                {project.deployedLink && project.deployedLink !== "" && (
                  <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    View Deployed
                  </a>
                )}
                <a href={project.githubLink} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">View GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

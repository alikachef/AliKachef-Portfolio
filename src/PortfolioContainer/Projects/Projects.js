import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";
import "./Projects.css"


export default function Projects() {
  return (
    <section id="projects" className="projects">
        <div className="projectsDiv">
          <div className="header1">
          
          <div className="headerP">
          <CodeIcon className="char" />
          <h1>Projects</h1>
            
          </div>
        </div>
        <div className="displayP">
          {projects.map((project) => (
            <a 
              href={project.link}
              key={project.image}
              className="projectL">
              <div className="projectP">
                <img
                  alt="gallery"
                  className="projectImg"
                  src={project.image}
                />
                <div className="projectB">
                  <h3>
                    {project.subtitle}
                  </h3>
                  <h1>
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
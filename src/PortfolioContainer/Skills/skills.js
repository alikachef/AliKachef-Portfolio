import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data";
import './skills.css'

export default function Skills() {
  return (
    <section className="back"  id="skills">
      <div className="container">
        <div className="text-center mb-20">
          <ChipIcon className="char1" />
          <h1 className="header1">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="skillContainer">
          {skills.map((skill) => (
            <div key={skill} className="skills">
              <div className="skill">
                <BadgeCheckIcon className="badgeIcon" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import React from "react";

function About({user}) {
  return (
    <div className="mainAbout">
      <div className="block">
      <p className="aboutMe">
      <img className="myImage" src={user.basics.image} alt="My profile" />
        <span className="aboutMeSmall">About Me</span>
        {user.basics.summary}
        </p>
      </div>
      <div className="mainSkills">
        <h4 className="aboutMeH4 ml-2">Skills</h4>
        <div className="skillsDiv">
          {user.skills.map((skill) => (
            <p  className="skills" key={skill.name}>{skill.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

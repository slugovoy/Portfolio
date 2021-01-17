import React from "react";

function About({user}) {
  return (
    <div className="mainAbout">
      <div className="block">
      <p className="aboutMe">
      <img className="myImage" src={user.basics.image} alt="My profile" />
        <h3 className="aboutMe">About Me</h3>
        {user.basics.summary}
        </p>
      </div>
      <div>
        <h4 className="aboutMeH4 ml-2">Skills</h4>
        <div className="skillsDiv">
          {user.skills.map((skill) => (
            <li  className="skills" key={skill.name}>{skill.name}</li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

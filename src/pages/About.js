import React from "react";

function About({user}) {
  return (
    <div className="mainAbout">
      <div>
      <p className="aboutMe">
      <img className="myImage" src={user.basics.image} alt="My profile" />
        <h3 className="aboutMe">About Me</h3>
        {user.basics.summary}
        </p>
      </div>
      <div>
        <h4 className="aboutMeH4">Skills</h4>
        <div className="skillsDiv">
          {user.skills.map((skill) => (
            <li  className="skills" key={skill.name}>{skill.name}</li>
          ))}
        </div>
      </div>
      <div>
        <h4 className="aboutMeH4">Profiles</h4>
        <ul className="profiles">
          {user.basics.profiles.map((profile, i) => (
            <h6 key={profile.network}>
              {i !== 0 && " | "}
              <a className="refer" href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </h6>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About;

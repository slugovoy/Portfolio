import React from "react";
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
// About page renders information from json
function About({user}) {
  const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`;
  return (
    <FadeIn>
    <div className="mainAbout">
      <div className="block">
      <p className="aboutMe">
      <img className="myImage" src={user.basics.image} alt="My profile" />
        <span className="aboutMeH4" style={{color: 'rgb(14, 20, 80)'}}>About Me</span><br/>
        {user.basics.summary}
        </p>
      </div>
      <div className="mainSkills">
        <h4 className="aboutMeH4 text-center">Skills</h4>
        <div className="skillsDiv">
          {user.skills.map((skill) => (
            <p  className="skills" key={skill.name}>{skill.name}</p>
          ))}
        </div>
      </div>
    </div>
    </FadeIn>
  );
}

export default About;

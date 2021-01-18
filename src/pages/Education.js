import React from "react";
import { Grid } from "@material-ui/core";
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

function Education({ user }) {
  const FadeIn = styled.div`
  animation: 2s ${keyframes`${fadeIn}`};
`; 
  return (
    <FadeIn>
    <div className="mainEducation" user={user}>
      <div>
        <h2 className="title">Education</h2>
        <div className="portfolioCards">
          {user.education.map((education, i) => (
            <Grid item className="projectCard" md={12} key={i}>
              <h3 className="projectName">{education.institution}</h3>
              <div>
                <h6>
                  {education.studyType}, {education.area}
                </h6>{" "}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <p>{education.description.replace("\n\n", "\n")}</p>
            </Grid>
          ))}
        </div>
      </div>
    </div>
    </FadeIn>
  );
}

export default Education;

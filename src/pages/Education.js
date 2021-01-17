import React from "react";
import { Grid } from "@material-ui/core";

function Education({ user }) {
  return (
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
  );
}

export default Education;

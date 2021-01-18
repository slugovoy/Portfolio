import React from "react";
import { Grid } from '@material-ui/core';

function Project({ user }) {
  return (
    <div className="mainProject" user={user}>
      <div>
        <h2 className="title">Projects</h2>
        <Grid container cols={2}>
        <div className="portfolioCards">
          {user.projects.map((project, i) => (

            <Grid item className="projectCard" md={12} key={i}>
              <h3 className="projectName">{project.name}</h3>
              <img
                src={project.images[0].resolutions.thumbnail.url}
                alt="Project Demo"
              />
              <p style={{ fontStyle: "oblique", fontSize: "1.4rem"}}>Description: {project.summary}</p>
              <div>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <p style={{ fontStyle: "oblique", fontSize: "1.4rem"}} key={j}>Language: {item}</p>
                ))}
              </div>

              <div>
                <a href={project.githubUrl} rel="noreferrer" target="_blank">
                  Github Repository
                </a>
              </div>
              <div>
                <a href={project.website} rel="noreferrer" target="_blank">
                  Deployed App
                </a>
              </div>
            </Grid>
          ))}
        </div>
        </Grid>
      </div>
    </div>
  );
}

export default Project;

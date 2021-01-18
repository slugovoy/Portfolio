import React from 'react'
import { Grid } from "@material-ui/core";

function Experience({user}) {

    return (
        <div className="mainExperience" user={user}>
        <div>
          <h2 className="title">Work Experience</h2>
          <div className="portfolioCards">
            {user.work.map((work, i) => (
              <Grid item className="projectCard" md={12} key={i}>
              <h3 className="projectName">{work.position}</h3>
                <div>
                  <h5>{work.company}</h5> <span>{work.location}</span>
                  <span> &sdot; </span>
                  <span>
                    {work.start.year} to {work.end.year}
                  </span>
                </div>
                <p>{work.summary}</p>
              </Grid>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Experience

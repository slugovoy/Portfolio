import React from "react";

function Project({ user }) {
  return (
    <div className="mainProject" user={user}>
      <div>
        <h2 className="title">Projects</h2>
        <div className="portfolioCards">
          {user.projects.map((project, i) => (
            <div className="projectCard" key={i}>
              <h3>{project.name}</h3>
              <img
                src={project.images[0].resolutions.thumbnail.url}
                alt="Project Demo"
              />
              <p style={{ fontStyle: "oblique" }}>{project.summary}</p>
              <div>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <p key={j}>{item}</p>
                ))}
              </div>

              <div>
                <a href={project.githubUrl} rel="noreferrer" target="_blank">
                  Github Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

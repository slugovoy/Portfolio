import React from 'react'

function Project({user}) {
    return (
        
            <div user={user}>
      <div>
        <h4>Projects</h4>
        <ul>
          {user.projects.map((project, i) => (
            <h4 key={i}>
              <h5>{project.name}</h5>
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
            </h4>
          ))}
        </ul>
      </div>
    </div>
        
    )
}

export default Project

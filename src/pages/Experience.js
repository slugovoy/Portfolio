import React from 'react'

function Experience({user}) {

    return (
        <div className="mainAbout" user={user}>
        <div>
          <h4>Work</h4>
          <ul>
            {user.work.map((work, i) => (
              <li key={i}>
                <h5>{work.position}</h5>
                <div>
                  <h6>{work.company}</h6> <span>{work.location}</span>
                  <span> &sdot; </span>
                  <span>
                    {work.start.year} to {work.end.year}
                  </span>
                </div>
                <p>{work.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
}

export default Experience

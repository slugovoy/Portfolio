import React from 'react'

function Education({user}) {
    return (
        <div className="mainAbout" user={user}>
      <div>
        <h4>Education</h4>
        <ul>
          {user.education.map((education, i) => (
            <li key={i}>
              <h6>{education.institution}</h6>
              <div>
                <h6>
                  {education.studyType}, {education.area}
                </h6>{" "}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <p>
                {education.description.replace("\n\n", "\n")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
}

export default Education

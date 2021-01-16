import React from 'react'
import Project from "../components/Project/Project"

function Portfolio({user}) {
    return (
        <div className="mainAbout">
       <Project user={user}/>
        </div>
    )
}

export default Portfolio

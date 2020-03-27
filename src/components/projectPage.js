import React from "react"
import { Link } from "gatsby"
import "./../styles/projectPage.scss"


const ProjectPage = (props) => (
    <div className={`project-page project-page-${props.title.replace(/\s/g, '-').toLowerCase()}`}>
        <Link className="back-button neo" to={`/`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="auto" viewBox="0 0 32 32" aria-hidden="true"><polygon points="13 26 14.41 24.59 6.83 17 29 17 29 15 6.83 15 14.41 7.41 13 6 3 16 13 26" /><title>Arrow left</title></svg>
        </Link>
        <div className="header">
            <h1 className="title">
                {props.title}
            </h1>
        </div>
        {props.children}
    </div>
);

export default ProjectPage;
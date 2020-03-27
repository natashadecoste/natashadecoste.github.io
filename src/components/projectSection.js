import React from "react"
import ProjectTile from "./projectTile"

import "./../styles/project.scss"

import projects from "./../assets/poe.json"


class ProjectSection extends React.Component {
    render() {
        return (
            <div className="project">
                <h2 className="title">Projects</h2>
                {projects.projects.map((item, index)=>{
                    return (<ProjectTile 
                        key={`key-${index}`} 
                        title={item.title} 
                        labels={item.labels}
                        pageLink={item.pageLink}>
                        </ProjectTile>);
                })
            }
            </div>
        )
    }
}

export default ProjectSection;
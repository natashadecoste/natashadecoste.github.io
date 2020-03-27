import React from "react"
import { Link } from "gatsby"
import "./../styles/projectTile.scss"
import Label from "./label";


class ProjectTile extends React.Component {
    render() {
        return (
            <Link
                to={`/project/${this.props.pageLink}`}
                state={{ fromFeed: true }}
            >
                <div className="project-tile neo">
                    <span className="description">
                        <h3 className="title">
                            {this.props.title}
                        </h3>
                        <div className="labels">
                            {this.props.labels && this.props.labels.map((label, key) => {
                                return (
                                    <Label name={label.name} color={label.color} key={key} styleName="neo-inner"></Label>
                                );
                            })}
                        </div>
                    </span>
                    {/* {this.props.image && <img className="image" src={this.props.image}></img>} */}
                </div>
            </Link>

        )
    }
}

export default ProjectTile;
import React from "react"

// components
import ProjectPage from "../../components/projectPage"
import Label from "../../components/label"

// technologies
import sketch from "./../../assets/project-assets/technologies/sketch.png";
import carbon from "./../../assets/project-assets/technologies/carbon.png";

// icons
import role from "./../../assets/project-assets/technologies/work.png";
import objective from "./../../assets/project-assets/technologies/aim.png";
import impact from "./../../assets/project-assets/technologies/impact.png";


const IntegratedEditorPage = () => (
  <ProjectPage title="Blue Steel">
    <p>Incubator project for the 6 week duration of <b>IBM __patterns</b> design training.</p>
    <div className="text-row neo-inner">
      <div className="title">
        <img src={role} style={{ width: "25px" }}></img>
        <h2>roles</h2>
      </div>
      <div className="content labels">
        <Label name="UX Designer" color="green" styleName="neo"></Label>
        <Label name="UX Researcher" color="green" styleName="neo"></Label>
      </div>
    </div>
    <div className="text-column neo-inner">
      <div className="title">
        <img src={objective} style={{ width: "30px" }}></img>
        <h2>objective</h2>
      </div>
      <div className="content">
        <p>Utilize the design thinking framework to improving a developer's learning experience with an IBM B2B Product.</p>
      </div>
    </div>
    <div className="text-column neo-inner">
      <div className="title">
        <img src={impact} style={{ width: "50px" }}></img>
        <h2>impact</h2>
      </div>
      <div className="content">
      <ul>
          <li>Delivered high quality prototypes and valuable insights to instigate change and be consumed by the sponsor teams.</li>
          <hr></hr>
          <li>Provided short, middle and longterm solutions to accomplish the problems that were investigated.</li>
          <hr></hr>
          <li>Improved an overall platform design targeting learning for developers.</li>
          <hr></hr>
          <li>Contribute more insights for IBM's approach to learning experiences cross-portfolio.</li>
        </ul>
      </div>
    </div>
    <div className="text-column neo-inner">
      <div className="title">
        {/* <img src={impact} style={{ width: "50px" }}></img> */}
        <h2>technologies</h2>
      </div>
      <div className="image-row">
        <div className="half neo">
          <img src={sketch} />
        </div>
        <div className="half neo">
          <img src={carbon}></img>
        </div>
      </div>
    </div>
  </ProjectPage>
)

export default IntegratedEditorPage

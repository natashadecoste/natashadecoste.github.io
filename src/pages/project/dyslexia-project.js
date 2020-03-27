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

const DyslexiaPage = (props) => (
  <ProjectPage title="Dyslexia Project">
    <p>Improving an online platform that teaches children who suffer with Dyslexia to read.</p>
    <div className="text-row neo-inner">
      <div className="title">
        <img src={role} style={{ width: "25px" }}></img>
        <h2>roles</h2>
      </div>
      <div className="content labels">
        <Label name="UX Designer" color="green" styleName="neo"></Label>
        <Label name="UI Developer" color="green" styleName="neo"></Label>
      </div>
    </div>
    <div className="text-column neo-inner">
      <div className="title">
        <img src={objective} style={{ width: "30px" }}></img>
        <h2>objective</h2>
      </div>
      <div className="content">
        <p>Improve lesson completion rate in order to increase accuracy and fluency advancing the user's overall reading competency.</p>
      </div>
    </div>
    <div className="text-column neo-inner">
      <div className="title">
        <img src={objective} style={{ width: "30px" }}></img>
        <h2>solution</h2>
      </div>
      <div className="content">
        <p>Incorporating mechanisms of gamification in order to engage users to complete more classes. </p>
      </div>
    </div>
    <div className="text-column neo-inner">
      <div className="title">
        <img src={impact} style={{ width: "50px" }}></img>
        <h2>impact</h2>
      </div>
      <div className="content">
        <p>Using technology to help to improve the conditions for dyslexic children learning how to read can impact the overall literally rates globally.</p>
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

export default DyslexiaPage

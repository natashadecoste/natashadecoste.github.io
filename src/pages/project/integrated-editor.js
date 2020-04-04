import React from "react"

// components
import ProjectPage from "../../components/projectPage"
import Label from "../../components/label"

// technologies
import sketch from "./../../assets/project-assets/technologies/sketch.png";
import carbon from "./../../assets/project-assets/technologies/carbon.png";

// photos
import components from "./../../assets/project-assets/blue-steel/components.png"

// icons
import role from "./../../assets/project-assets/technologies/work.png";
import objective from "./../../assets/project-assets/technologies/aim.png";
import impact from "./../../assets/project-assets/technologies/impact.png";

// styles
import "./../../styles/blue-steel.scss"



class IntegratedEditorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;
    if (isMobile) {
      return (
        <ProjectPage title="Blue Steel" heading="Incubator project for the 6 week duration of <b>IBM __patterns</b> design training.">
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
              <p>Utilize the design thinking framework to improve a developer's learning experience with an IBM B2B Product.</p>
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
      );
    } else {
      return (
        <ProjectPage title="Blue Steel" heading="Incubator project for the 6 week duration of IBM __patterns design training.">
          <div className="dashboard-row">
            <div className="col-1">
              <div className="img-container">
                <img src={components} />
              </div>
            </div>
            <div className="col-2">
              {/* roles section */}
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
              {/* objectives row */}
              <div className="text-column neo-inner">
                <div className="title">
                  <img src={objective} style={{ width: "30px" }}></img>
                  <h2>objective</h2>
                </div>
                <div className="content">
                  <p>Utilize the design thinking framework to improve a developer's learning experience with an IBM B2B Product.</p>
                </div>
              </div>
              {/* technologies section */}
              <div className="text-column neo-inner" style={{ marginBottom: 0 }}>
                <div className="title">
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
            </div>
          </div>
          {/* impact row */}
          <div className="col-full">
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
          </div>
        </ProjectPage>
      );
    }

  }
}


export default IntegratedEditorPage

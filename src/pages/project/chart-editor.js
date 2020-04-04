import React from "react"
import { window } from "browser-monads";

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

// assets
import iso from "./../../assets/project-assets/xenon/iso.png"

// styles
import "./../../styles/charts-editor-page.scss"


class ChartEditorPage extends React.Component {
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
      // mobile view
      return (
        <ProjectPage title="Charts Editor" heading="WYSIWYG chart editor to create, mutate and export data visualizations compliant with IBM's Carbon Design System">
          <div className="img-container">
            <img src={iso} style={{ width: "150vw", marginLeft: -40 }}></img>
          </div>
          <div className="text-row neo-inner">
            <div className="title">
              <img src={role} style={{ width: "25px" }}></img>
              <h2>roles</h2>
            </div>
            <div className="content labels">
              <Label name="UX Designer" color="green" styleName="neo"></Label>
              <Label name="UI Designer" color="green" styleName="neo"></Label>
            </div>
          </div>
          <div className="text-column neo-inner">
            <div className="title">
              <img src={objective} style={{ width: "30px" }}></img>
              <h2>objective</h2>
            </div>
            <div className="content">
              <p>Use concepts of design thinking to deliver a high quality experience for users working with data visualizations.</p>
            </div>
          </div>
          <div className="text-column neo-inner">
            <div className="title">
              <img src={impact} style={{ width: "50px" }}></img>
              <h2>impact</h2>
            </div>
            <div className="content">
              <ul>
                <li>Increases the accessibility of high quality data visualizations company-wide and opensource community.</li>
                <hr></hr>
                <li>Brings more consistency to IBM's portfolio of products and increase IBM Design's eminence with data visualization</li>
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
        <ProjectPage title="Charts Editor" heading="WYSIWYG chart editor to create, mutate and export data visualizations compliant with IBM's Carbon Design System">
          <div className="dashboard-row">
            <div className="col-1">
              <div className="img-container">
                <img src={iso} />
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
                  <li>Increases the accessibility of high quality data visualizations company-wide and opensource community.</li>
                  <hr></hr>
                  <li>Brings more consistency to IBM's portfolio of products and increase IBM Design's eminence with data visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </ProjectPage>
      );
    }
  }
}

export default ChartEditorPage

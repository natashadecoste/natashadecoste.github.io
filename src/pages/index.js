import React from "react"

// import components
import Layout from "../components/layout"
import ProjectSection from "./../components/projectSection"
import Shell from "../components/shell"
import Terminal from "react-console-emulator"
import Loader from "./../components/loader"

// images
import image from "./../assets/profile1.jpg";
import Dribble from 'react-share-icons/lib/Dribbble';
import Twitter from 'react-share-icons/lib/Twitter';
import SvgGithub from './../assets/github'


// technologies
import gatsby from "./../assets/project-assets/technologies/gatsby-icon.png";
import react from "./../assets/project-assets/technologies/react.png";

// styles
import "./../styles/mainpage.scss"
import "./../styles/global.scss"

import SEO from "../components/seo"



const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () {
      return `${Array.from(arguments).join(' ')}`
    }
  },
  npx: {
    usage: 'npx natashadecoste',
    fn: function () {
      if (arguments[0] === "natashadecoste") {
        return "Run `npx natashadecoste` in your local terminal to see my card";
      }
      else {
        return "Error: try running `npx natashadecoste`";
      }
    }
  }
}

class IndexPage extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const terminalinput = document.getElementsByClassName('my-terminal-input')[0];
      terminalinput.value = "npx natashadecoste";
      terminalinput.style.height = "unset";

      this.terminal.focusTerminal();
    }, 0)
  }

  render() {
    return (
      <Layout>
        <div className="page-body">
          <div className="header-bar"></div>
          <div className="information">
            <div className="text-content">
              <h1 className="name">Natasha DeCoste</h1>
              <p className="title">ux/ui developer at IBM</p>
              <div className="icons-social">
                <a href="https://dribbble.com/natashadecoste"><Dribble className="neo shares-dribble"></Dribble></a>
                <a href="https://twitter.com/codebunny2"><Twitter className="neo shares-twitter"></Twitter></a>
                <a href="https://github.com/natashadecoste"><SvgGithub className="neo" height="100%" width="1.5em" fill="white"></SvgGithub></a>
              </div>
            </div>
          </div>
          <div className="graphics">
            <img className="headshot" src={image}></img>
            <div className="terminals">
              <Shell
                id="looping-shell"
                height="150px"
              >
                <Loader />
              </Shell>
              <Shell
                id="interactive-shell"
                height="250px"
                width="70%"
              >
                <Terminal
                  style={{ background: "none", height: "100%", minWidth: "unset", minHeight: "unset" }}
                  inputClassName={`my-terminal-input`}
                  contentStyle={{ padding: "none" }}
                  ref={(c) => this.terminal = c}
                  commands={commands}
                  noDefaults={true}
                  noHistory={false}
                  promptLabel={'me@Desktop:~$'}
                />
              </Shell>
            </div>
          </div>
        </div>
        <ProjectSection></ProjectSection>
        <SEO title="Natasha DeCoste" />
        <div className="built-with">
          <div className="image-row">
            <div className="badge neo-inner">
              <img src={react} />
            </div>
            <div className="badge neo-inner">
              <img src={gatsby}></img>
            </div>
          </div>
          <p>website powered by</p>
        </div>
      </Layout>
    )
  }
}


export default IndexPage;

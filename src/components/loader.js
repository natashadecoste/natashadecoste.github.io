import React from "react"
import cliSpinners from "cli-spinners";


const data = [
    "developing",
    "eating tacos",
    "designing experiences",
    "illustrating",
    "ideating",
    "creating",
    "dreaming",
    "coding webpages",
    "experiencing",
    "canoodling",
    "empathizing",
    "sleeping",
    "cooking pasta",
    "wireframing"
  ];
  

  
class Loader extends React.Component {
    constructor() {
        super()

        this.spinner = {
            strings: cliSpinners.dots.frames,
            interval: cliSpinners.dots.interval,
            currentState: 0
        };

        this.text = {
            strings: data,
            interval: 600,
            currentState: 0
        };

        this.state = {
            spinnerString: this.spinner.strings[this.spinner.currentState],
            textString: this.text.strings[this.text.currentState]
        }

    }

    componentDidMount() {
        this.runSpinner(this.spinner, "spinnerString");
        this.runSpinner(this.text, "textString");
    }

    runSpinner(spinner, stateItem) {
        setInterval(() => {
            spinner.currentState = (spinner.currentState + 1) % spinner.strings.length;
            this.setState({
                [stateItem]: spinner.strings[spinner.currentState]
            });
        }, spinner.interval);
    }

    render() {
        return (
            <p>{this.state.spinnerString} {this.state.textString}</p>
            
        )
    }
}

export default Loader;
import { Component } from "react";
import { FeedbackButtons } from "./FeedbackOptions";
import { FeedbackResults } from "./FeedbackResults";

let openResult = false;
let openDisresults = true;

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateGood = () => {
    openDisresults = false;
    openResult = true;
    this.setState((prevState) => {
        return {
            ...prevState,
            good: prevState.good += 1
        }
    })
  }

  onUpdateBad = () => {
    openDisresults = false;
    openResult = true;
    this.setState((prevState) => {
        return {
            ...prevState,
            bad: prevState.bad += 1
        }
    })
  }

  onUpdateNeutral = () => {
    openDisresults = false;
    openResult = true;
    this.setState((prevState) => {
        return {
            ...prevState,
            neutral: prevState.neutral += 1
        }
    })
  }

  render() {
    return (
      <>
        <FeedbackButtons onGood={this.onUpdateGood} onBad={this.onUpdateBad} onNeutral={this.onUpdateNeutral}/>
        {openDisresults && <h2>No results</h2>}
        {openResult && <FeedbackResults results={this.state}/>}
      </>
    );
  }
}

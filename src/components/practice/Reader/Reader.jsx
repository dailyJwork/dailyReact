import { Component } from "react";

export class Reader extends Component {
  state = {
    index: 0,
  };

  onPrev = () => {
    this.setState((prevState) => {
      return {
        index: (prevState.index -= 1),
      };
    });
  };

  onNext = () => {
    this.setState((prevState) => {
      return {
        index: (prevState.index += 1),
      };
    });
  };

  render() {
    const { items } = this.props;
    const publication = items[this.state.index];

    return (
      <>
        <h2>Reader</h2>
        <div>
          <ul>
            <li>
              <button onClick={this.onPrev} disabled={this.state.index === 0}>
                Prev
              </button>
            </li>
            <li>
              <button
                onClick={this.onNext}
                disabled={this.state.index + 1 === items.length}
              >
                Next
              </button>
            </li>
          </ul>
          <p>
            {this.state.index + 1} / {items.length}
          </p>
          <h2>{publication.title}</h2>
          <p>{publication.description}</p>
        </div>
      </>
    );
  }
}

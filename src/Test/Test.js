import React, { Component } from 'react';

const myVar = 'Hello! je suis une const !';

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Salut',
      increment: 0,
      date: new Date()
    };
    // this.tic = this.tic.bind(this); équivalent à () =>
  }

  componentDidMount() {
    window.setInterval(this.tic, 1000);
  }

  tic = () => {
    let newTime = this.state.increment;
    if (newTime < 100) {newTime++;}
    this.setState({
      increment : newTime,
      date: new Date()
    });
  }

  render() {
    return (
      <div className="test">
        {this.state.greeting} {this.props.who} ! tu es une {this.props.adj} variable ReactJS ! {this.state.increment} points à {this.state.date.toLocaleTimeString()}
        <br />{myVar}<br />
      </div>
    )
  }
}

export default Test;

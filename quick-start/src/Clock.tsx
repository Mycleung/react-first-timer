import * as React from 'react';

interface ClockState { date: Date }

class Clock extends React.Component <{}, ClockState> {
  private timerID: number

  constructor(props: {}) {
    super(props)
    this.state = { date: new Date() }
  }

  public componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000
    );
  }

  public componentWillUnmount() {
    clearInterval(this.timerID);
  }

  public render() {
    return (
      <div>
        <p>It is {this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }

  private tick() {
    this.setState({
      date: new Date()
    })
  }
}

export default Clock
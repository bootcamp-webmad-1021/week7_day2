import React, { Component } from 'react'

class Counter extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }
  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter+1
    })
  }


  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={() => this.incrementCounter()} className="btn btn-primary">Suma 1</button>
      </div>
    )
  }
}

export default Counter
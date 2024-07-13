import React, { Component } from 'react'

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export class ClassCounter extends Component<CounterProps, CounterState> {

    state = {
        count: 0
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.incrementCount()}>increment</button>
        <div>{this.props.message}</div>
      </div>
    )
  }
}

export default ClassCounter
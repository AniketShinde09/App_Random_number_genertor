// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)

    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <div>
            <button type="button" className="btn" onClick={this.randomNumber}>
              Generate
            </button>
          </div>
          <h1 className="random-number">{number}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator

import React, { Component } from 'react'
import { drinks } from '../../fakeApi'

class DrinksList extends Component {
  constructor() {
    super()

    this.state = {
      drinks: drinks
    }
  }

  render() {

    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.state.drinks.map((eachDrink, idx) => <p key={idx}>La bebida nº {idx} es: {eachDrink}</p>)}
      </div>
    )
  }

}

export default DrinksList
import React, { Component } from "react";

class Button extends Component {
  constructor() {
    super()

    //El estado INICIAL del componente
    this.state = {
      submitted: false,
      text: "Pulsa para enviar"
    }

  }

  handleClick() {

    this.setState({ text: "Enviado correctamente", submitted: true })

  }

  render() {



    return (
      <a style={{ backgroundColor: this.state.submitted ? "green" : "tomato" }} onClick={() => this.handleClick()} className="btn btn-primary">{this.state.text}</a>
    )
  }
}

export default Button
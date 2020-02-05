import React from 'react'

class CreateKaijuForm extends React.Component {

  state = {
    name: "",
    power: "",
    image: ""
  }

  handleNameAdd = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePowerAdd = (event) => {
    this.setState({
      power: event.target.value
    })
  }

  handleImageAdd = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let newKaiju = {
      name: this.state.name,
      power: this.state.power,
      image: this.state.image
    }
    this.handleFetch(newKaiju)
    this.resetForm()
  }

  handleFetch = (newKaiju) => {
    fetch("http://localhost:4000/kaijus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newKaiju)
    })
    .then(resp => resp.json())
    .then(newKaiju => this.props.addKaijuToState(newKaiju))
  }

  resetForm = () => {
    this.setState({
      name: "",
      power: "",
      image: ""
    })
  }
  
  render() {


    return (
      <form onSubmit={this.handleSubmit} id='create-kaiju-form'>

        <label>Name: </label>
        <input onChange={this.handleNameAdd} value={this.state.name} type='text' placeholder="add your name here.." />

        <label>Power: </label>
        <input onChange={this.handlePowerAdd} value={this.state.power} type='text' placeholder="add your power here..." />

        <label>Image: </label>
        <input onChange={this.handleImageAdd} value={this.state.image} type='text' placeholder="add your image url here..." />

        <br/>

        <input type='submit' value='List Kaiju' />

      </form>
    )
  }
}

export default CreateKaijuForm

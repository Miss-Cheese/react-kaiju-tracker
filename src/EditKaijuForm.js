import React from 'react'

class EditKaijuForm extends React.Component {

  state = {...this.props}

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handlePowerChange = (event) => {
    this.setState({
      power: event.target.value
    })
  }

  handleImageChange = (event) => {
    this.setState({
      image: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()

    let updatedKaiju = {
      name: this.state.name,
      power: this.state.power,
      image: this.state.image
    }
    this.handlePatchRequest(updatedKaiju)
    this.props.toggleEditMode()
  }


  handlePatchRequest = (updatedKaiju) => {

    fetch(`http://localhost:4000/kaijus/${this.props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedKaiju)
    })
    .then(response => response.json())
    .then(updatedKaiju => this.props.updateKaijuInState(updatedKaiju))
  }




  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit} className='kaiju-card-edit-form'>

          <label>Name: </label>
          <input onChange={this.handleNameChange} value={this.state.name} type='text' />
          <br/>

          <label>Power: </label>
          <input onChange={this.handlePowerChange} value={this.state.power} type='text' />
          <br/>

          <label>Image URL: </label>
          <input onChange={this.handleImageChange} value={this.state.image} type='text' />
          <br/>

          <input type="submit" value="Save Changes" />

        </form>
      </>
    )
  }
}

export default EditKaijuForm

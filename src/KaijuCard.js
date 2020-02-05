// React
import React from 'react'
// Components
import EditKaijuForm from './EditKaijuForm'

class KaijuCard extends React.Component {

  state = {
    editMode: false
  }

  toggleEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  } 

  render() {

    return (
      <div className='kaiju-card'>

        <h2 className='kaiju-card-name'>{this.props.name}</h2>
        <h3 className='kaiju-card-power'>Power: {this.props.power}</h3>

        <img className='kaiju-card-image' src={this.props.image} alt={this.props.name} />

        <button onClick={this.toggleEditMode} className='kaiju-card-edit-button'>Edit</button>
        {this.state.editMode && 
        <EditKaijuForm 
        {...this.props}
        updateKaijuInState={this.props.updateKaijuInState}
        toggleEditMode={this.toggleEditMode}
        />
        } 

      </div>
    )
  }
}

export default KaijuCard

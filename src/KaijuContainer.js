//React
import React from 'react'
// Components
import KaijuCard from './KaijuCard'
import CreateKaijuForm from './CreateKaijuForm'
import TickerContainer from './TickerContainer'
//Fetch Requests
import * as requests from './requests'
// Read the README for how to fetch

class KaijuContainer extends React.Component {

  state = {
    kaijus: []
  }

  componentDidMount() {
     requests.fetchKaijus()
    .then(kaijusData => this.setState({
      kaijus: kaijusData
    })
    )
  }

  addKaijuToState = (newKaiju) => {
    this.setState({
      kaijus: [...this.state.kaijus, newKaiju]
    })
  }

  
  updateKaijuInState = (updatedKaiju) => {

    let newKaijuArray = this.state.kaijus.map(kaiju => {

      if (kaiju.id === updatedKaiju.id) {
        kaiju = updatedKaiju
      }
      return kaiju
    })
      this.setState({
        kaijus: newKaijuArray
      })
  }

  
  render() {
    
    let displayedKaijus = this.state.kaijus.map(kaiju =>
      <KaijuCard 
      {...kaiju}
      updateKaijuInState = {this.updateKaijuInState}
      key={kaiju.id}
      />)
  

    return (
      <>

        <CreateKaijuForm addKaijuToState={this.addKaijuToState}/>

        <div id='kaiju-container'>

          {displayedKaijus}

        </div>


        {/* Just pass kaijus to TickerContainer and it'll create a news ticker at the bottom */}
        <TickerContainer kaijus={this.state.kaijus} />
        {/* You won't have to modify TickerContainer but it's a fun preview for some other react features */}

      </>
    )

  }
}

export default KaijuContainer

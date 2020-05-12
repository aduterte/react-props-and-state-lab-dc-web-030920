import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
    // this.onAdoptPet = this.onAdoptPet.bind(this)
  }

  onAdoptPet = (event) => {
    
    let id = event.target.id
    let newPetArr = this.state.pets.map(pet => {
      // debugger
      if (pet.id === id) {
        pet.isAdopted = true
      }
     return pet
    })
    const t = this
    this.setState({
       pets: newPetArr
    })
    // debugger
    // pet.isAdopted = true
   
  }
  

 
  
  filter = (event) => {
    // debugger
    this.setState({
          filters: {type: event.target.value}
            
            })
   
  }

  onFindPetsClick = () => {
    // debugger
    let type = this.state.filters.type
    
    fetch(`/api/pets?type=${type}`)
    .then(resp => resp.json())
    .then(data => this.setState({pets: data}))
    
  }

 

  render() {
   
 
    // debugger
    return (
      <div className="ui container">
       
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters func={this.filter} findPet={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} func={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

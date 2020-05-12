import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  // constructor(){
  //   super(),
  //   this.state = {

  //   }
  // }
  // onAdoptPet = (event) => {

  //   let id = event.target.id
  //   let pet = this.props.pets.find(obj => obj.id === id)
  //   debugger
  //   pet.isAdopted = true
   
  // }
  
  
  
  
  render() {
    let arr = this.props.pets
    // arr.map( pet => {
    //   <Pet petObj={pet}/>
    // })

    

    console.log("the type is: ", this.props.pets)
    return (
      <div className="ui cards" > 
        {arr.map(pet => <Pet key={pet.id} pet={pet} adopt={this.props.func} />)}
      </div>
    )
  }
}

export default PetBrowser

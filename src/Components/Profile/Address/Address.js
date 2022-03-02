import React, { Component } from "react";

class User extends Component {
  state = {
    newUser: { ville: "", pays: "" }
  };
  handleVille(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        ville: value
      }
    }));
  }
  handleLastName(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        pays: value
      }
    }));
  }

  getFullAddress() {
    return this.state.newUser.ville.charAt(0).toUpperCase() 
    + this.state.newUser.ville.slice(1).toLowerCase() 
    + ", " + this.state.newUser.pays.charAt(0).toUpperCase()
    + this.state.newUser.pays.slice(1).toLowerCase();
  }
  
//   wordCapitalize(){
//      return str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
//   }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleVille.bind(this)}
          placeholder="Veuillez renseigner votre ville"
        />
        <input
          type="text"
          onChange={this.handleLastName.bind(this)}
          placeholder="Veuillez renseigner votre pays"
        />
        Adresse complète : {this.getFullAddress()}
      </div>
    );
  }
}
export default User;
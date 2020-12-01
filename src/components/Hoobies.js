import React, { Component } from "react";
import Show from "./Show";
import Form from "./Form";
class Hoobies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextS: false,
      precedant: false,
      informationForm: {
        nom: this.props.nomForm,
        prenom: this.props.prenomForm,
        telephone: this.props.telephoneForm,
      },
      hobbies: [],
    };
  }
  handleClickCheckbox =  (e) => {
   let hobbiesChecked = this.state.hobbies;
   let value = e.target.value;
   let etat = e.target.checked;
  
    switch(etat) {
      case true:
       hobbiesChecked.push(e.target.value);
        break;

      case false:
      hobbiesChecked =   hobbiesChecked.filter(word => word !=value);
        break;   
    }
    this.setState({
      hobbies: hobbiesChecked
    })
     console.log("vous avez choissez : ",this.state.hobbies);
  };
  handleClickNextS = () => {
    this.setState({
      nextS: true,
    });
  };
  handleClickPrecedantF = () => {
    this.setState({
      precedant: true,
    });
  };
  render() {
    if (this.state.precedant === false) {
      if (this.state.nextS === false) {
        return (
          <div>
            <h1>Hobbies</h1>
            <label>Sport</label>
            <input
              className="sport"
              type="checkbox"
              value="sport"
              onChange={this.handleClickCheckbox}
            />

            <label>Sleeping</label>
            <input
              className="sleeping"
              type="checkbox"
              value="sleeping"
              onChange={this.handleClickCheckbox}
            />

            <label>Coding</label>
            <input
              className="coding"
              type="checkbox"
              value="coding"
              onChange={this.handleClickCheckbox}
            />

            <button className="PrecedantF" onClick={this.handleClickPrecedantF}>
              précédant
            </button>
            <button className="nextS" onClick={this.handleClickNextS}>
              Next
            </button>
          </div>
        );
      } else {
        return <Show {...this.state} />;
      }
    } else {
      return <Form />;
    }
  }
}
export default Hoobies;

import React, { Component } from "react";
import Show from "./Show";
import Formulaire from "./Formulaire";
import {Button,Form,Container} from "react-bootstrap";
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
          <Container fluid>
            <h1>Hobbies</h1>
            <Form>

            <Form.Group>
            <Form.Check type="checkbox" 
            value="sport"
            onChange={this.handleClickCheckbox}
            label="Sport" />
            </Form.Group>
            

            <Form.Group>
            <Form.Check type="checkbox" 
            value="sleeping"
            onChange={this.handleClickCheckbox}
            label="Sleeping" />
            </Form.Group>

            <Form.Group>
            <Form.Check type="checkbox" 
            value="sport"
            onChange={this.handleClickCheckbox}
            label="Coding" />
            </Form.Group>


            <Button  variant="secondary" className="PrecedantF" onClick={this.handleClickPrecedantF} type="submit">
            preceding
            </Button>
                
            <Button  variant="success" className="nextS" onClick={this.handleClickNextS} type="submit">
                Next
            </Button>
          
            </Form>
</Container>
        );
      } else {
        return <Show {...this.state} />;
      }
    } else {
      return <Formulaire />;
    }
  }
}
export default Hoobies;

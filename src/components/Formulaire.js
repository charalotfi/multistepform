import React, { Component } from "react";
import Hobbies from './Hobbies';
import '../assets/css/Hobbies.css';
import '../assets/css/Formulaire.css';
import {Button,Form,Container} from "react-bootstrap";

class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomForm: "",
      prenomForm: "",
      telephoneForm: "",
      next: false,
    };
  }

  handleClickNom = (e) => {
    this.setState({
      nomForm: e.target.value,
    });
  };

  handleClickPrenom = (e) => {
    this.setState({
      prenomForm: e.target.value,
    });
  };
  handleClickTelephone = (e) => {
    this.setState({
      telephoneForm: e.target.value,
    });
  };
  handleClickNextH = () => {
    this.setState({
      next: true,
    });
  };

  render() {
    return (
      <>
      {this.state.next === false ? (
        <>     
  <Container >

<Form className="firstForm">
  <Form.Group>
    <Form.Label>First name</Form.Label>
    <Form.Control 
     type="text"
     onChange={this.handleClickNom}
     value={this.state.nomForm}
     placeholder="First name" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Last name</Form.Label>
    <Form.Control 
     type="text"
     onChange={this.handleClickPrenom}
     value={this.state.prenomForm}
     placeholder="Last name" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Phone</Form.Label>
    <Form.Control 
     type="text"
     onChange={this.handleClickTelephone}
     value={this.state.telephoneForm}
     placeholder="Phone" />
  </Form.Group>

  
  
</Form>
<Button className="nextOfForm" variant="success" onClick={this.handleClickNextH} type="submit">
  Next
  </Button>
</Container>
        </>
        
      ) : (
        <Hobbies {...this.state} />
      )}

    </>
    );
  }
}
export default Formulaire;

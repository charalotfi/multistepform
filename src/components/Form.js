import React, {Component} from 'react';
import Hoobies from './Hoobies';
import { Button } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import '../assets/css/Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nomForm:"",
            prenomForm:"",
            telephoneForm:"",
            next:false,
            
        };

    }
   
   handleClickNom = (e) => {
        this.setState({
            nomForm:e.target.value
        })

      };

      handleClickPrenom = (e) => {
        this.setState({
            prenomForm:e.target.value
        });

      };
      handleClickTelephone = (e) => {
        this.setState({
            telephoneForm:e.target.value
        })

      };
      handleClickNextH = () => {
        this.setState({
            next:true
        })

      };
    

    render(){
            return(
            
                <div>
                   
                        {this.state.next === false ? 
                        
                                                    
                        <div>

                              <form className = "noValidate" autoComplete="off">
                      
                                <Input placeholder="Nom" inputProps={{ 'aria-label': 'description' }}
                                 className="nom"
                                 type="text"
                                 onChange={this.handleClickNom}
                                 value={this.state.nomForm}
                                  />
                                  <br/>
                              
                                <Input placeholder="Prénom" inputProps={{ 'aria-label': 'description' }} 
                                className="form-control prenom"
                                type="text"
                                onChange={this.handleClickPrenom}
                                value={this.state.prenomForm}
                                />
                                <br/>
                               
                                <Input placeholder="telephone" inputProps={{ 'aria-label': 'description' }} 
                                className="telephone"
                                type="text"
                                onChange={this.handleClickTelephone}
                                value={this.state.telephoneForm}
                                />
                                <br/>
                                
                                
                                
                              </form>

                             
                             <Button className = "suivant" variant="contained" color="primary"  onClick={this.handleClickNextH}>Next  </Button>
                          
                                  
                             
                             
                        </div>
                         :<Hoobies {...this.state} /> }
                       
                       
                </div>
            ) 
       
        
    }
}
export default Form;
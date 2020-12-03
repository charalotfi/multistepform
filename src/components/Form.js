import React, {Component} from 'react';
import Hoobies from './Hoobies';
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

                              <form >
                      
                                <input
                                 className="nom"
                                 type="text"
                                 onChange={this.handleClickNom}
                                 value={this.state.nomForm}
                                  />
                                  <br/>
                              
                                <input
                                className="prenom"
                                type="text"
                                onChange={this.handleClickPrenom}
                                value={this.state.prenomForm}
                                />
                                <br/>
                               
                                <input
                                className="telephone"
                                type="text"
                                onChange={this.handleClickTelephone}
                                value={this.state.telephoneForm}
                                />
                                <br/>
                                
                                
                                
                              </form>

                             
                             <button className = "suivant" onClick={this.handleClickNextH}>Next  </button>
                          
                                  
                             
                             
                        </div>
                         :<Hoobies {...this.state} /> }
                       
                       
                </div>
            ) 
       
        
    }
}
export default Form;
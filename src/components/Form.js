import React, {Component} from 'react';
import Hoobies from './Hoobies';
import Show from './Show';

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
                             <h1>hello from Form Component</h1>
                        <label>Nom </label>
                        <input
                        className="nom"
                        type="text"
                        onChange={this.handleClickNom}
                        value={this.state.nomForm}
                        />
    
                        <label>Prénom </label>
                        <input
                        className="prenom"
                        type="text"
                        onChange={this.handleClickPrenom}
                        value={this.state.prenomForm}
                        />
    
                        <label>Téléphone </label>
                        <input
                        className="telephone"
                        type="text"
                        onChange={this.handleClickTelephone}
                        value={this.state.telephoneForm}
                        />




                             <button className="suivant" onClick={this.handleClickNextH}>Next</button>
                             
                             
                        </div>
                         :<Hoobies {...this.state} /> }
                       
                       
                </div>
            ) 
       
        
    }
}
export default Form;
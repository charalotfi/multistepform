import React, {Component} from 'react';
import Hobbies from './Hobbies';
import '../assets/css/Show.css';
import {Button,Form,Container} from "react-bootstrap";

class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            precedantH:false  
        }
       
    }
    handleClickPrecedantH = () => {
        this.setState({
            precedantH:true
        })
      };
    render(){
        if(this.state.precedantH === false){
            return(
                <div>
                <p className="titleShow"> Show </p>
                 <p>voila votre saisie :</p>
                 <div className="containerShow">
                 <div className="formInformation">
                         <p>  Nom :{this.props.informationForm.nom}</p>
                            <p>Prenom :{this.props.informationForm.prenom}</p>
                            <p>Téléphone :{this.props.informationForm.telephone}</p> 
                 </div>
                           <div classNam="hobbiesSelected">
                           <p>Hobbies :</p>
                           {this.props.hobbies.map((x,index)=> {
                               return(<p key={index}>{x}</p>)
                               })}
                           </div>
                 </div>
                
                           
                             <Button  variant="secondary" className="PrecedantH" onClick={this.handleClickPrecedantH}type="submit"> preceding </Button>                                      
                            
            </div>
            )
        }else{
            return(<Hobbies {...this.props.informationForm} />)
        }
       
     
    }
}
export default Show;
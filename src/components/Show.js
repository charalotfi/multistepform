import React, {Component} from 'react';
import Hoobies from './Hoobies';

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
                <h1> Show </h1>
                 <p>voila votre saisie :</p>
                            <p>Nom :{this.props.informationForm.nom}</p>
                             <p>Prenom :{this.props.informationForm.prenom}</p>
                            <p>Téléphone :{this.props.informationForm.telephone}</p> 
                            <button className="PrecedantH" onClick={this.handleClickPrecedantH}>précédant</button> 
            </div>
            )
        }else{
            return(<Hoobies {...this.props.informationForm} />)
        }
       
     
    }
}
export default Show;
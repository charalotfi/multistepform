import React, {Component} from 'react';
import Show from './Show';
import Form from './Form';
class Hoobies extends React.Component{
    constructor(props){
        super(props);
      this.state={
        nextS:false, 
        precedant:false,
        informationForm:{
            nom:this.props.nomForm,
            prenom:this.props.prenomForm,
            telephone:this.props.telephoneForm,
        },
        hoobies:[],
       

      }
    }
    handleClickNextS = () => {
        this.setState({
            nextS:true
        })
      };
      handleClickPrecedantF = () => {
        this.setState({
            precedant:true
        })
      };
render(){

  if( this.state.precedant === false){
    if(this.state.nextS === false ){
        return(
            <div>
            <h1>hellow from Hoobies component</h1>
                        <label>Sport</label>
                                    <input
                                    className="sport"
                                    type="checkbox"
                                    />
    
                        <label>Sleeping</label>
                                    <input
                                    className="sleeping"
                                    type="checkbox"
                                    />
    
                        <label>Cooding</label>
                                    <input
                                    className="cooding"
                                    type="checkbox"
                                    />
    
           
            <button className="PrecedantF" onClick={this.handleClickPrecedantF}>précédant</button>                      
            <button className="nextS" onClick={this.handleClickNextS}>Next</button>
          
                    
    </div>
        )
           
        } else{
           return(<Show {...this.state} />) 
        } 
      
  }else{
    return(<Form  /> )
  }      

}
}
export default Hoobies;
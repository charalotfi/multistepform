import React, {Component} from 'react';
import Hoobies from './Hoobies';
import Show from './Show';
import Form from './Form';

class MasterForm extends React.Component{
    constructor(props){
        super(props);
         }
   
    render(){
        return(
            <div>
                <Form />
              </div>
        )
        
    }
}
export default MasterForm;
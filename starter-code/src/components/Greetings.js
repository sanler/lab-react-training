import React, { Component } from 'react';
import '../App.css';

class Greetings extends Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
         lang:props.lang,
         name:props.children
        }
    }

    selectSaludo=(lang)=>{

        let saludo;
        switch(lang){
        case 'de':
            saludo="Hallo";
            break;
        case 'fr':
                saludo="Bonjour";
        break;
        default:
                saludo="No hablo ese idioma";
            break;
        }
        return saludo;
    }

render(){


const card=(
    <div  className="card-id-list">
    <div>
        <p>{this.selectSaludo(this.state.lang)} {this.state.name}</p>
    </div>

</div>
);

return(card);

}

}



export default Greetings;

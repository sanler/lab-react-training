import React, { Component } from 'react';
import '../App.css';
/**   
birthday.getFullYear();   // 1980
birthday.getMonth();      // 6
birthday.getDate();       //31
**/

class IdCard extends Component{

    constructor(props){
        super(props);
        console.log(props);
        
        this.state={
            lastName: props.lastName,
            firstName:props.firstName,
            gender:props.gender,
            height: props.height,
            birth:props.birth.getDay()+'/'+props.birth.getMonth()+'/'+props.birth.getFullYear(),
            picture: props.picture

        }
   
    }


render(){
const card=(

    <div  className="card-id-list">
        <div>
            <img src={this.state.picture} alt="mypic"/>
        </div>
        <div>
            <p>First Name: {this.state.firstName}</p>
            <p>Last Name: {this.state.lastName}</p>
            <p>Gender: {this.state.gender}</p>
            <p>height: {this.state.height}</p>
            <p>birth: {this.state.birth}</p>
        </div>
    </div>



);

return(card);

}

}



export default IdCard;

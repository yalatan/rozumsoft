import React, { Component } from 'react';
import myCoord from '.././api/endpoint.json';

class DataJson extends Component {
    constructor(props) {
        super(props);
        
       this.center = [];
        this.state = {
        todos: myCoord.points
      }
    
    }
    handleClick = (e) => {
      const index = this.state.todos.map(e => e.name).indexOf(e.target.innerText);
        console.log(e.target.innerText);
        
        this.center = this.state.todos[index].coodrs;
        console.log(this.center);
    }
    
   
    
      render() {
        return (
            <ul className="list">{this.state.todos.map(el => 
                <li  className="list--item" onClick={((e) => this.handleClick(e))}>{el.name}</li>)}</ul> 
        );
      }
     
    
}

export default DataJson;

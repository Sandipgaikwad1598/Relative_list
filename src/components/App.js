import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const RelativesList = [
            {Relatives_name: 'Sandip', keys: 'Relatives1'},
            {Relatives_name: 'Raj', keys: "Relatives2"},
            {Relatives_name: 'Ram', keys: 'Relatives3'},
            {Relatives_name: "Sanket" ,keys:"Relatives4"}
          ];
      
          return (
            <div id="main">
            <ol className="ol">
                RelativesList
              {RelativesList.map((name)=> {
                return (
                  <li key={name.keys} id={name.keys}>{name.Relatives_name}</li>
                );
              })}
            </ol>
            </div>
          );
        }
}


export default App;

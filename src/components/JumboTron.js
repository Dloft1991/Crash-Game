import React, { Component } from 'react';
import './components.css'


class JumboTron extends Component {
    render() {
      return (
        <div className="jumbotron bg-light text-dark">
                {/* <p className="lead">This is a simple Memory Game based on characters from the hit series "The Office"</p> */}
                <hr className="my-4" />
                <h3 className="display-6">Click at your own risk</h3>
                <p>Click on a character to get a point. Click a character more than once, Whoa! you lose.</p>
           
        </div>
      );
    }
  }
  
  export default JumboTron;
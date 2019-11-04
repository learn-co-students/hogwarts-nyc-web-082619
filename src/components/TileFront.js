import React, { Component } from 'react';

 class TileFront extends Component {
    
     
     render(){
        
        const image = this.props.name.toLowerCase().split(" ").join("_");
        return (
            <div>
                <h1 id="displayWeight" >{this.props.sortByWeight === true ? `${this.props.weight}` : ""}</h1>
                <h1>{this.props.name}</h1>
                <img src={`./hog-imgs/${image}.jpg`} alt="pig"/>
            </div>
        );
        }
}

export default TileFront;

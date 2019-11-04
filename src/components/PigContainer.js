import React, { Component } from 'react';
import PigTile from './PigTile.js'

class PigContainer extends Component {
    
    state={
        hidden: false
    }

    hideHandler = ()=>{
        this.setState({
            hidden: !this.state.hidden
        })
    }

    renderPigs = ()=>{
       return this.props.allHogs.map(hog => { 
           return < PigTile {...hog} sortByWeight={this.props.sortByWeight}  hideHandler={this.hideHandler} key={this.hog} />
    })
    }

    hiddenPigs = () => {
        return [...this.renderPigs].filter((pig) => {
            return console.log(pig.this.state.hidden)
        })
    }


    render() {
        // console.log(this.renderPigs());
        return (
            <div className="pigContainer" >
                {this.renderPigs()}{this.hiddenPigs()}
            </div>
        );
    }
}

export default PigContainer;

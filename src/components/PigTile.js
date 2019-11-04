import React, { Component } from 'react';
import TileBack from './TileBack.js'
import TileFront from './TileFront.js';


class PigTile extends Component {

    state={
        clicked: false,
        color: true
    }

    handleClick = () => {
     this.setState({
         clicked: !this.state.clicked,
         color: !this.state.color
        })
    }

    renderTile = () =>{
            if(!this.state.clicked ){
                return < TileFront name={this.props.name} weight={this.props.weight} sortByWeight={this.props.sortByWeight}/>
            } else if (this.state.clicked){
                return < TileBack specialty={this.props.specialty} greased={this.props.greased} weight={this.props.weight} highestMedalAchieved={this.props['highest medal achieved']}/>
            }
        }

   
    render() { 
        return (
            <div onClick={this.handleClick}  className={this.state.color ? 'pigTileRed' : 'pigTileBlue'} >
              {this.renderTile()}
              <button onClick={this.props.hideHandler} > hide me!</button>
            </div>
        );
    }
}

export default PigTile;


import piggy from '../porco.png'
import React from 'react'
import NavForm from './NavForm.js';

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				< NavForm sortByWeightHandler={props.sortByWeightHandler} nameSorterHandler={props.nameSorterHandler} filtered={props.filtered} filterHandler={props.filterHandler} handleInput={props.handleInput}/>
			</div>
		</div>
	)
}

export default Nav



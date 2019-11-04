import React from 'react';

const NavForm = (props) => {
    return (
        <div>
            <button onClick={props.filterHandler}>{props.filtered ? "greassy" : "not greassy"}</button>
            <button onClick={props.nameSorterHandler} >Sort by name </button>
            <button onClick={props.sortByWeightHandler} >Sort by weight </button>
            <input onChange={props.handleInput} placeholder="search..." />
        </div>
    );
}

export default NavForm;

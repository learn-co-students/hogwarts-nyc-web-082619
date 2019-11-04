import React from 'react';

const TileBack = (props) => {
    return (
        <div>
           <h3>{props.specialty}</h3>
           <h3>{props.weight}</h3>
           <h3>{props.highestMedalAchieved}</h3>
        </div>
    );
}

export default TileBack;

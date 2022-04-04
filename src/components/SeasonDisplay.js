import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
    summer : {
        text: `We should head to the beach and catch some sunlight`,
        iconName: 'sun'
    },
    winter : {
        text: `It's cold out here...`,
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return  lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const {lat} = props;
    const month = new Date().getMonth();
    const season = getSeason(lat, month);
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}></i>
        </div>
    );
}

export default SeasonDisplay;
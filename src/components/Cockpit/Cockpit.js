import React from "react";

import classes from './Cockpit.css';

const cockpit = (props) => {

    let classes = [];
    if(props.persons.length <=2) {
      classes.push('red');
    }
    if(props.persons.length <=1) {
      classes.push('bold');
    }

    return (
        <div className={classes.Cockpit}>
        <h1>hi, react app</h1>
        <p className={classes.join(' ')}>this is really working!</p>
        <button 
          style={style}
          onClick={props.clicked}>Toggle Persons</button>  
          </div>
    );
};

export default cockpit;
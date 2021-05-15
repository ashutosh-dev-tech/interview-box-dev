import React from 'react';
import {Link} from 'react-router-dom';
import "./card.css";

const Card = (props) => { 
    return (
    <div className="card" key={props.ind}>
        <div className="card-header">
            <h3>{props.curExp.exprience} yrs</h3>
            <h3>{props.curExp.role} </h3>
        </div>
        {/* <div className="main">{props.curExp.company}</div> */}
        <img src={props.curExp.imgUrl}></img>
    </div>
)
};

export default Card;
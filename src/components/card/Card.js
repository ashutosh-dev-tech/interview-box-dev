import React from 'react';
import "./card.css";
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card" key={props.curExp.ind}>
            <div className="card-header">
                <h3>{props.curExp.exprience} yrs</h3>
                <h3>{props.curExp.role} </h3>
            </div>
            {/* <div className="main">{props.curExp.company}</div> */}
            <Link to={"/"+props.curExp.id}>
                <img src={props.curExp.imgUrl}></img>
            </Link>
        </div>
    );
};

export default Card;
import React from 'react';
import "./box.css";
import Card from '../card/Card';
import { Link } from 'react-router-dom';

const Box = (props) => {
    return (
        <div className='container'>
            {(props.allCards.expList).map((curExp, ind)=>{
            return ( 
                <Link to={"/"+ind}>
                    <Card key={ind} curExp={curExp}/>
                </Link>
            );
        })}
        </div>
    );
}

export default Box;
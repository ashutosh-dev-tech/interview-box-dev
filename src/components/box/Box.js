import React from 'react';
import "./box.css";
import allCards from '../../experiences/allExp.json';
import Card from '../card/Card';
import { Link } from 'react-router-dom';

const Box = () => {
    return (
        <div className='container'>
            {(allCards.expList).map((curExp, ind)=>{
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
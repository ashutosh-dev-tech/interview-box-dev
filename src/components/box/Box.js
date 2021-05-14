import React from 'react';
import "./box.css";
import allCards from '../../experiences/allExp.json';
import Card from '../card/Card';

const Box = () => (
    <div className='container'>
        {(allCards.expList).map((curExp, ind)=>{
        return <Card curExp={curExp} ind={ind}/>
    })}
    </div>
);

export default Box;
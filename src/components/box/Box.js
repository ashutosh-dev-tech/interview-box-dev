import React from 'react';
import "./box.css";
import Card from '../card/Card';

const Box = (props) => {
    return (
        <div className='container'>
            {(props.allCards.expList).map((curExp, ind)=>{
                return (                 
                    <Card key={ind} curExp={curExp}/>
                );
            })}
        </div>
    );
}

export default Box;
import React from 'react';
import allExp from '../../experiences/allExp.json';
import './post.css';

const Post = (props) => {
    const curPost = allExp.expList[props.id];
    debugger;
    return (
    <>
        <div className="post-header">
            <div>{curPost.exprience} yrs</div>
            <div><a href={curPost.website} target="_black">{curPost.company}</a></div>
            <div>{curPost.role}</div>
        </div> 
        <ol>
            {curPost.rounds.map((curRound, ind)=>{
                return (<div >
                    <h3>Round {ind+1}: </h3>
                    <ol>
                        {
                            curRound.questions.map((ques)=>{
                                return (
                                <div className="post-ques">{ques}</div>
                                );
                            })
                        }
                    </ol>
                </div>
                )
            })}
        </ol>
    </>
  );
}
export default Post;
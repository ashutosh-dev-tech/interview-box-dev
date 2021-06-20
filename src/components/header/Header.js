import React, {useEffect, useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import {Route} from 'react-router-dom';

const debounce = (fn, delay)=>{
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        setTimeout(()=>{
            fn(...args);
        }, delay);
    }
}

const Header = (props) => {
    const inputRef = useRef("");
    //debounce
    const [search, setSearch] = useState("");
    useEffect(()=>{
        const timeoutId = setTimeout(()=>{
            props.filterPosts(search);
        }, 500);
        
        //cleanup function
        return ()=>{
            clearTimeout(timeoutId);
        };
    }, [search]);
    return (
        <div className="header">
            <Link to="/">
                <h2>Interview Box</h2>            
            </Link>
            {   
            <Route path="/" exact={true}>
                <div>
                    <i class="fa fa-search searchIcon"></i>
                    <input placeholder="search" 
                    type="search" 
                    onChange={(e)=>{        
                        setSearch(e.target.value);
                    }}
                    ref={inputRef}
                    value={inputRef.current.value}/>
                </div>
            </Route>
            }
        </div>
    );
}
export default Header;
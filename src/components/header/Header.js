import React, {useRef} from 'react';
import { Link } from 'react-router-dom';
import "./header.css";
import {Route} from 'react-router-dom';


const Header = (props) => {
    const inputRef = useRef("");
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
                        props.filterPosts(e.target.value);
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
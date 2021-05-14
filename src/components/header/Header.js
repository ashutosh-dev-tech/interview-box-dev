import React from 'react';
import "./header.css";

//onclick reload window
const refreshPage = () => {
    window.location.reload();
};


const Header = () => (
    <div className="header">
        <h3 onClick={refreshPage}>Interview Box</h3>
    </div>
);

export default Header;
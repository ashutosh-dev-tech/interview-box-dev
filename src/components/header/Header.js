import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => (
    <div className="header">
        <Link to="/">
            <h2>Interview Box</h2>
        </Link>
    </div>
);

export default Header;
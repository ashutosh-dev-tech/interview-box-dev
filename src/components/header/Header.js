import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

const Header = () => (
    <div className="header">
        <Link to="/">
            <h3>Interview Box</h3>
        </Link>
    </div>
);

export default Header;
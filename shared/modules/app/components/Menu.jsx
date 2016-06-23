import React from 'react';
import { Link } from 'react-router';

const Menu = ({ items }) => {
    return (
        <ul>
            {items.map(item => <li key={item.link} className="main-menu__item"><Link to={item.link}>{item.title}</Link></li>)}
        </ul>
    );
};

export default Menu;
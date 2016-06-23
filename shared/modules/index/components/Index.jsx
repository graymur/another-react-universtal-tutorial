import React from 'react';
import { Link } from 'react-router';

const Index = () => {
    return (
        <div>
            <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/galleries">Galleries</Link></li>
                <li><Link to="/page">Page</Link></li>
            </ul>
        </div>
    );
};

export default Index;
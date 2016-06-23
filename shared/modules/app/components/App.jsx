import React from 'react';
import { Link } from 'react-router';

import Menu from './Menu.jsx';

const App = ({ menu, children }) => {
    return (
        <div>
            <header>
                <Menu items={menu}/>
            </header>
            {children}
            <footer>&copy; {(new Date()).getFullYear()}</footer>
        </div>
    );
};

export default App;
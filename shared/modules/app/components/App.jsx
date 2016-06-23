import React from 'react';
import { Link } from 'react-router';

import Menu from './Menu.jsx';

const App = ({ menu, children, xhrPending, xhrError }) => {
    return (
        <div>
            <header>
                <Menu items={menu}/>
            </header>
            { xhrPending ? <div>Loading...</div> : null }
            { xhrError ? <div>All is lost!</div> : children }
            <footer>&copy; {(new Date()).getFullYear()}</footer>
        </div>
    );
};

export default App;
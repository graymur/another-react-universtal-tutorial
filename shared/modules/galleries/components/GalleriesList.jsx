import React from 'react';
import Gallery from './Gallery.jsx';

const GalleriesList = ({ galleries }) => {
    return (
        <div>
            <h1>Galleries</h1>
            {galleries.map(item => <Gallery key={item.id} gallery={item}/>)}
        </div>
    );
};

export default GalleriesList;
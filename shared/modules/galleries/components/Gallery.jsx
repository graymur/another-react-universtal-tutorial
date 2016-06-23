import React from 'react';
import Image from './Image.jsx';

const Gallery = ({ gallery }) => {
    return (
        <div>
            <h2>{gallery.title}</h2>
            {gallery.images.map(item => <Image key={item.id} image={item}/>)}
        </div>
    );
};

export default Gallery;
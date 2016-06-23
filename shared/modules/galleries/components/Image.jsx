import React from 'react';

const Image = ({ image }) => {
    return (
        <div>
            <img src={`${image.src}?${Math.random()}`} alt={image.caption}/>
            <p>{image.caption}</p>
        </div>
    );
};

export default Image;
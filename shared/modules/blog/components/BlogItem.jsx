import React from 'react';

const BlogItem = ({ item }) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
        </div>
    );
};

export default BlogItem;
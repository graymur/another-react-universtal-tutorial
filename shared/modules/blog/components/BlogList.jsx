import React from 'react';
import BlogItem from './BlogItem.jsx';

const BlogList = ({ blog }) => {
    return (
        <div>
            <h1>Blog</h1>
            {blog.map(item => <BlogItem key={item.id} item={item}/>)}
        </div>
    );
};

export default BlogList;
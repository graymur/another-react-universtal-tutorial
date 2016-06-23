import React from 'react';
import { connect } from 'react-redux';

import BlogList from './components/BlogList.jsx';

import { fetchBlogData } from './actions.js';

class BlogContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchBlogData());
    }

    render() {
        return <BlogList blog={this.props.blog}/>;
    }
}

const mapStateToProps = state => {
    return {
        blog: state.blog
    }
};

export default connect(mapStateToProps)(BlogContainer);
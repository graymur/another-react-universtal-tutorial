import React from 'react';
import { connect } from 'react-redux';

import BlogList from './components/BlogList.jsx';

class BlogContainer extends React.Component {
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
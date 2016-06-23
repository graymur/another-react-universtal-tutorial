import React from 'react';
import { connect } from 'react-redux';

import BlogList from './components/BlogList.jsx';

import { fetchBlogData } from './actions.js';

class BlogContainer extends React.Component {
    componentDidMount() {
        this.feetchIfNeeded(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.feetchIfNeeded(nextProps);
    }

    feetchIfNeeded(nextProps) {
        if (!this.props.blog.length && !nextProps.blog.length) {
            this.constructor.fetch({ dispatch: this.props.dispatch });
        }
    }

    static fetch({ dispatch }) {
        return dispatch(fetchBlogData());
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
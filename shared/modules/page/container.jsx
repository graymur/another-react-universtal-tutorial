import React from 'react';
import { connect } from 'react-redux';

import Page from './components/Page.jsx';

import { fetchPageData } from './actions.js';

class PageContainer extends React.Component {
    componentDidMount() {
        this.feetchIfNeeded(this.props);
    }

    componentWillReceiveProps(props) {
        this.feetchIfNeeded(props);
    }

    feetchIfNeeded(nextProps) {
        if ((!this.props.page.title && !nextProps.page.title) || nextProps.params.splat !== this.props.params.splat) {
            this.constructor.fetch({
                dispatch: this.props.dispatch,
                splat: nextProps.params.splat
            });
        }
    }

    static fetch({ dispatch, splat }) {
        return dispatch(fetchPageData(splat));
    }

    render() {
        return <Page page={this.props.page}/>;
    }
}

const mapStateToProps = state => {
    return {
        page: state.page
    }
};

export default connect(mapStateToProps)(PageContainer);
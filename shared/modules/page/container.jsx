import React from 'react';
import { connect } from 'react-redux';

import Page from './components/Page.jsx';

class PageContainer extends React.Component {
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
import React from 'react';
import { connect } from 'react-redux';

import Index from './components/Index.jsx';

class IndexContainer extends React.Component {
    render() {
        return <Index />;
    }
}

const mapStateToProps = state => {
    return {
        index: state.index
    }
};

export default connect(mapStateToProps)(IndexContainer);
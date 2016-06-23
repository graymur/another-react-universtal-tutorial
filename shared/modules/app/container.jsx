import React from 'react';
import { connect } from 'react-redux';

import { fetchAppData } from './actions.js';

import App from './components/App.jsx';

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAppData());
    }

    render() {
        return <App {...this.props.app} children={this.props.children}/>;
    }
}

const mapStateToProps = state => {
    return {
        app: state.app
    }
};

export default connect(mapStateToProps, null)(AppContainer);
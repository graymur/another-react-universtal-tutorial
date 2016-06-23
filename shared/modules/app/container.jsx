import React from 'react';
import { connect } from 'react-redux';

import { fetchAppData, clearXhrError } from './actions.js';

import App from './components/App.jsx';

class AppContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchAppData());
    }

    componentWillReceiveProps(props) {
        if (props.location.pathname !== this.props.location.pathname) {
            this.props.dispatch(clearXhrError());
        }
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
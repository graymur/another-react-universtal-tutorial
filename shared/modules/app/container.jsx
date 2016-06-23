import React from 'react';
import { connect } from 'react-redux';

import { fetchAppData, clearXhrError } from './actions.js';

import App from './components/App.jsx';

class AppContainer extends React.Component {
    componentDidMount() {
        this.feetchIfNeeded(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.props.dispatch(clearXhrError());
        }
    }

    feetchIfNeeded(nextProps) {
        if (!this.props.app.menu.length || nextProps.location.pathname !== this.props.location.pathname) {
            this.constructor.fetch({ dispatch: this.props.dispatch });
        }
    }

    static fetch({ dispatch }) {
        dispatch(fetchAppData());
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
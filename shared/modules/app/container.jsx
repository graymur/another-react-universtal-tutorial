import React from 'react';
import { connect } from 'react-redux';

import App from './components/App.jsx';

class AppContainer extends React.Component {
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
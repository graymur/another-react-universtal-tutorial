import React from 'react';
import { connect } from 'react-redux';

import GalleriesList from './components/GalleriesList.jsx';

class GalleriesContainer extends React.Component {
    render() {
        return <GalleriesList galleries={this.props.galleries}/>;
    }
}

const mapStateToProps = state => {
    return {
        galleries: state.galleries
    }
};

export default connect(mapStateToProps)(GalleriesContainer);
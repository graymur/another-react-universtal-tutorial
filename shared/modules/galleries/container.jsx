import React from 'react';
import { connect } from 'react-redux';

import GalleriesList from './components/GalleriesList.jsx';

import { fetchGalleriesData } from './actions.js';

class GalleriesContainer extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchGalleriesData());
    }

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
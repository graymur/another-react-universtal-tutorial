import React from 'react';
import { connect } from 'react-redux';

import GalleriesList from './components/GalleriesList.jsx';

import { fetchGalleriesData } from './actions.js';

class GalleriesContainer extends React.Component {
    componentDidMount() {
        this.feetchIfNeeded(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.feetchIfNeeded(nextProps);
    }

    feetchIfNeeded(nextProps) {
        if (!this.props.galleries.length && !nextProps.galleries.length) {
            this.constructor.fetch({ dispatch: this.props.dispatch });
        }
    }

    static fetch({ dispatch }) {
        return dispatch(fetchGalleriesData());
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
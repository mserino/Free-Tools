import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getSelectedTools } from '../../redux/reducers/tools';

import SelectedToolsList from '../../components/SelectedToolsList';

const SelectedToolsListContainer = ({ selectedTools }) => {
    return (
        <SelectedToolsList selectedTools={ selectedTools }/>
    )
}

SelectedToolsListContainer.propTypes = {
    selectedTools: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => {
    selectedTools: state.selectedTools
}

export default connect(
    mapStateToProps
)(SelectedToolsListContainer)
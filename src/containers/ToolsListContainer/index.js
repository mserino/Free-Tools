import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToolsList from '../../components/ToolsList';

const ToolsListContainer = ({ tools }) => {
    return (
        <ToolsList tools={ tools } />
    );
}

ToolsListContainer.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => ({
    tools: state.tools
});

export default connect(
    mapStateToProps
)(ToolsListContainer);
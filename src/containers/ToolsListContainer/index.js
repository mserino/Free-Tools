import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Tool from '../../components/Tool/Tool';
import { onToolClicked } from '../../redux/actions';
import './styles.css';

const ToolsListContainer = ({ tools, onToolClicked }) => {
    return (
        <div className="tools-list">
            <h2 className="title">Select your tools</h2>
            <ul className="tools">
                {
                tools.map(tool => {
                    return (
                        <Tool
                        key={ tool.id }
                        tool={ tool }
                        onToolClicked={ () => onToolClicked(tool) }/>
                    )
                })
                }
            </ul>
        </div>
    );
}

ToolsListContainer.propTypes = {
    tools: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired,
    onToolClicked: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    tools: state.tools
});

export default connect(
    mapStateToProps,
    { onToolClicked }
)(ToolsListContainer);
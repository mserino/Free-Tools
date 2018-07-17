import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Tool from '../../components/Tool/Tool.js';
import './styles.css';

const SelectedToolsListContainer = ({ selectedTools }) => {
    return (
        <div className="selected-tools">
            <h2 className="title">Your tools</h2>
            <ul className="selected-tools-list">
                {
                    selectedTools.map(tool => {
                        return (
                        <Tool
                        key={ tool.id }
                        tool={ tool }
                        onToolClicked={ () => console.log('clicked') }/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

SelectedToolsListContainer.propTypes = {
    selectedTools: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })).isRequired
}

const mapStateToProps = state => ({
    selectedTools: state.selectedTools
})

export default connect(
    mapStateToProps
)(SelectedToolsListContainer)
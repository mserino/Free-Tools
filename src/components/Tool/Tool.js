import React from 'react';
import PropTypes from 'prop-types'

import './Tool.css';

const Tool = ({ tool, onToolClicked }) => {
    // const onElementClicked = () => {
    //     console.log('element clicked');
    // }

    return(
        <li className="tool" onClick={onToolClicked}>
            <span className="tool-name">{ tool.name }</span>
            <span className="tool-price">${ tool.price }</span>
            <i className="fas fa-trash-alt"></i>
        </li>
    )
}

Tool.propTypes = {
    tool: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    }).isRequired,
    onToolClicked: PropTypes.func.isRequired
}

export default Tool;
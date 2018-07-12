import React from 'react';
import './Tool.css';

const Tool = ({ id, name, price }) => {
    return(
        <li className="tool" key={ id }>
            <span className="tool-name">{ name }</span>
            <span className="tool-price">${ price }</span>
            <i className="fas fa-trash-alt"></i>
        </li>
    )
}

export default Tool;
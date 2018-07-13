import React from 'react';
import PropTypes from 'prop-types';

import './ToolsList.css';

const ToolsList = ({ tools }) => {
  const onToolClick = (tool) => {
    console.log('tool clicked', tool);
  }

  return (
    <div className="tools-list">
      <h2 className="title">Select your tools</h2>
      <ul className="tools">
        {
          tools.map(tool => {
            return (
              <li className="tool" key={ tool.id } onClick={ () => onToolClick(tool) }>
                <span className="tool-name">{ tool.name }</span>
                <span className="tool-price">${ tool.price }</span>
                <i className="fas fa-trash-alt"></i>
              </li>
            )
          })
        }
      </ul>
    </div>
    )
}

ToolsList.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })).isRequired
}

export default ToolsList;
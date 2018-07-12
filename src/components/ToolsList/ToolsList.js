import React from 'react';
import Tool from '../Tool/Tool';
import './ToolsList.css';

const ToolsList = ({ tools }) => {
    return (
      <div className="tools-list">
            <h2 className="title">Select your tools</h2>
            <ul className="tools">
              {
                tools.map(tool => {
                  return (
                    <Tool key={ tool.id } name={ tool.name } price={ tool.price } />
                  )
                })
              }
            </ul>
        </div>
      )
}

export default ToolsList;
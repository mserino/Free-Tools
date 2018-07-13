import React from 'react';
import Tool from '../Tool/Tool';
import './SelectedTools.css';

const SelectedToolsList = ({ selectedTools }) => {
    return(
        <div className="selected-tools">
            <h2 className="title">Your tools</h2>
            <ul className="selected-tools-list">
                {
                    selectedTools.map(tool => {
                        return (
                        <Tool key={ tool.id } name={ tool.name } price={ tool.price } />
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SelectedToolsList;
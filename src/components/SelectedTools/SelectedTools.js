import React from 'react';
import Tool from '../Tool/Tool';
import './SelectedTools.css';

const SelectedTools = () => {
    return(
        <div className="selected-tools">
            <h2 className="title">Your tools</h2>
            <ul className="selected-tools-list">
                <Tool id="1" name="name" price="0" />
            </ul>
        </div>
    )
}

export default SelectedTools;
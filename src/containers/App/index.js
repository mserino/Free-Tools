import React, { Component } from 'react';
// import tools from '../../products/products.json';
import ToolsListContainer from '../ToolsListContainer';
import SelectedToolsListContainer from '../SelectedToolsListContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ToolsListContainer />
        <SelectedToolsListContainer />
        {/* <ToolsList tools={ tools } />
        <SelectedTools /> */}
      </div>
    );
  }
}

export default App;

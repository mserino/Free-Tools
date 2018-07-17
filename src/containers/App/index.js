import React, { Component } from 'react';
// import tools from '../../products/products.json';
import ToolsListContainer from '../ToolsListContainer';
import SelectedToolsListContainer from '../SelectedToolsListContainer';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ToolsListContainer />
        <SelectedToolsListContainer />
      </div>
    );
  }
}

export default App;

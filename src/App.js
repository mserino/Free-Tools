import React, { Component } from 'react';
import tools from './products/products.json';
import ToolsList from './ToolsList/ToolsList';
import SelectedTools from './SelectedTools/SelectedTools';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <ToolsList tools={ tools } />
        <SelectedTools />
      </div>
    );
  }
}

export default App;

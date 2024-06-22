// App.js
import React, { Component } from 'react';
import News from './News';
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: 'business',
      query: ''
    };
  }

  handleCategoryChange = (category) => {
    this.setState({ category, query: '' });
  };

  handleSearch = (query) => {
    this.setState({ query, category: '' });
  };

  render() {
    return (
      <div>
        <Navbar 
          onCategoryChange={this.handleCategoryChange}
          onSearch={this.handleSearch} 
        />
        <News 
          category={this.state.category} 
          query={this.state.query} 
        />
      </div>
    );
  }
}

export default App;

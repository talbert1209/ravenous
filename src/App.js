import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/businessList.js';
import SearchBar from './components/SearchBar/searchBar.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;

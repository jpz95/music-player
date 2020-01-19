import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Grid from './components/grid/grid';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
      </header>
      <content className="App-content">
        <Grid>{{ columnNames: [ "cell1", "cell2", "cell3" ] }}</Grid>
      </content>
    </div>
  );
}

export default App;

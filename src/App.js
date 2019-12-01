import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import Grid from './components/Grid/Grid';
// import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar></SearchBar>
      </header>
      <content className="App-content">
        <Grid>{[ "row1,", "row2", "row3" ]}</Grid>
      </content>
    </div>
  );
}

export default App;

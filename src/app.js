import React from 'react';
import SearchBar from './components/search-bar/search-bar';
import Grid from './components/grid/grid';
// import logo from './logo.svg';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <SearchBar></SearchBar>
      </header>
      <div className="app__content">
        <div className="playlist__header">umpah umpah</div>
        <Grid>{{ columnNames: [ "cell1", "cell2", "cell3" ] }}</Grid>
      </div>
    </div>
  );
}

export default App;

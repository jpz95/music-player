import React from 'react';
import SearchBar from './components/search-bar/search-bar';
import Grid from './components/grid/grid';

const App = () => {
  const columns = [ "cell1", "cell2", "cell3" ];

  return (
    <div className="app">

      <header className="app__header">
        <SearchBar></SearchBar>
      </header>

      <div className="app__content">
        <div className="playlist__header">umpah umpah</div>
        <Grid columns={columns}></Grid>
      </div>

    </div>
  );
}

export default App;

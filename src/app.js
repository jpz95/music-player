import React from 'react';
import SearchBar from './components/search-bar/search-bar';
import Grid from './components/grid/grid';

const App = () => {
  const columns = [
    { label: "Song", field: "song" },
    { label: "Artist", field: "artist" },
    { label: "Length", field: "length" },
  ];

  const data = [
    { song: "song1", artist: "tu mama", length: "3:23", id: "hash1" },
    { song: "song2", artist: "tu mama", length: "3:33", id: "hash2" },
  ];

  return (
    <div className="app">

      <header className="app__header">
        <SearchBar></SearchBar>
      </header>

      <div className="app__content">
        <div className="playlist__header">umpah umpah</div>
        <Grid columns={columns} data={data}></Grid>
      </div>

    </div>
  );
}

export default App;

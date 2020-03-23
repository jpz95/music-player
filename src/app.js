import React from 'react';

import SearchBar from 'components/search-bar/search-bar';
import Playlist from 'features/playlist';
// TODO delete, no longer in use
const App = () => {
  return (
    <div className="app">

      <header className="app__header">
        <SearchBar></SearchBar>
      </header>

      <main className="app__content">
        <Playlist playlistName="greatest_playlist"></Playlist>
      </main>
    </div>
  );
}

export default App;

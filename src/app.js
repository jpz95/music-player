import React from 'react';

import SearchBar from '@/components/search-bar/search-bar';
import Playlist from './features/playlist';

const App = () => {
  return (
    <div className="app">

      <header className="app__header">
        <SearchBar></SearchBar>
      </header>

      <div className="app__content">
        <Playlist playlistName="greatest_playlist"></Playlist>
      </div>
    </div>
  );
}

export default App;

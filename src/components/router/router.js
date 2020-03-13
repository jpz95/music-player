import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchBar from 'components/search-bar/search-bar';
import Playlist from 'features/playlist';

const Router = () => {
  return (
    <div className="app">

      <header className="app__header">
        <SearchBar></SearchBar>
        <button className="primary">Click</button>
        <button className="secondary">Click</button>
        <button className="accent">Click</button>
        <button className="test">Click</button>
      </header>

      <main className="app__content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() =>
              <Playlist playlistName="greatest_playlist"></Playlist>
            }></Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Router;
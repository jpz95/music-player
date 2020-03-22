import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import SearchBar from 'components/search-bar/search-bar';
import PlaylistView from 'features/playlist-view/playlist-view';

const Router = () => {
  return (
    <div className="app">

      <header className="app__header">
        <SearchBar></SearchBar>
      </header>

      <main className="app__content">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <PlaylistView playlistName="greatest_playlist" />
            </Route>
            <Route path="/">
              <Redirect to="/" />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
};

export default Router;
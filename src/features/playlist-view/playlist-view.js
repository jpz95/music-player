import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Playlist from './playlist';
import './playlist-view.scss';

import { firestore } from 'base.js';

const PlaylistView = (props) => {
  const { playlistName } = props;

  // TODO create mock API call for firebase hooks
  const [playlistSongs, ] = useCollectionData(
    firestore
      .collection("playlists")
      .doc(playlistName)
      .collection("music"),
    { idField: "id" }
  );

  return (
    <article className="playlistView">
      <header className="playlistView__header p-a--sm">the greatest playlist :dab:</header>
      <Playlist songs={playlistSongs || []}></Playlist>
    </article>
  );
}

export default PlaylistView;
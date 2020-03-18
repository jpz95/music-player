import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SongList from 'components/song-list/song-list';

import { firestore } from '../base';

const Playlist = (props) => {
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
    <article className="playlist">
      <header className="playlist__header">the greatest playlist :dab:</header>
      <SongList songs={playlistSongs || []}></SongList>
    </article>
  );
}

export default Playlist;
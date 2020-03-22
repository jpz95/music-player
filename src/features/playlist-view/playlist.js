import React from 'react';

import PlaylistItem from './playlist-item';
import './playlist.scss';

const Playlist = (props) => {
  const { songs } = props;

  return (
    <ul className="playlist container list--none p-lr--sm">
      {songs.map((song) => <PlaylistItem key={song.id} item={song} />)}
    </ul>
  );
};

export default Playlist;
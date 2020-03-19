import React from 'react';
import SongListItem from './song-list-item';

// TODO rename as 'Playlist'
const SongList = (props) => {
  const { songs } = props;

  return (
    <ul className="songList container list--none">
      {songs.map((song) => <SongListItem key={song.id} item={song} />)}
    </ul>
  );
};

export default SongList;
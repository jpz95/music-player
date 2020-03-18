import React from 'react';
import SongListItem from './song-list-item';

const SongList = (props) => {
  const { songs } = props;

  return (
    <ul className="songList container list--none">
      {songs.map((song) => <SongListItem item={song} />)}
    </ul>
  );
};

export default SongList;
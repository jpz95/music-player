import React from 'react';

// TODO rename as 'PlaylistItem'
const SongListItem = (props) => {
  const { item } = props;
  const {
    song,
    artist,
    length,
    album,
  } = item;

  return (
    <li className="songListItem row align--center">
      <div className="col col-11 col-10--lg">
        <span>{song}</span>
        <div>
          <span>{artist}</span>
          <strong> - </strong>
          <span>{album}</span>
        </div>
      </div>

      <div className="col col-hide--xs col-1--lg">{length}</div>

      {/* TODO create IconButton component */}
      <icon className="col col-auto">:</icon>
    </li>
  );
};

export default SongListItem;
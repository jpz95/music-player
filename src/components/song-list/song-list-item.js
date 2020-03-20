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
    <li
      className="songListItem
        row
        noWrap
        align--center"
    >
      <div className="col-11 col-10--md">
        <span>{song}</span>
        <div className="d-flex align--center">
          <small>{artist}</small>
          <strong>-</strong>
          <small>{album}</small>
        </div>
      </div>

      <div
        className="songListItem__length
          justify--center
          col-hide--xs
          col-1--md"
      >
        {length}
      </div>

      {/* TODO create IconButton component */}
      <icon className="col col-auto">:</icon>
    </li>
  );
};

export default SongListItem;
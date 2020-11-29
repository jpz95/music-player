import React from 'react';

const PlaylistItem = (props) => {
  const { item } = props;
  const {
    song,
    artist,
    length,
    album,
  } = item;

  return (
    <li
      className="playlistItem
        row
        noWrap
        align--center"
    >
      <div className="col-12--xs col-11--md">
        <span>{song}</span>

        <small className="d-flex align--center">
          <span>{artist}</span>
          <strong className="p-lr-3">&#8226;</strong>
          <span>{album}</span>
        </small>
      </div>

      <div
        className="playlistItem__length
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

export default PlaylistItem;
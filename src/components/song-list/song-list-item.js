import React from 'react';

const SongListItem = (props) => {
  const { item } = props;
  const { id, song, artist, length } = item;

  return (
    <li key={id} className="songListItem row">
      <div className="col">
        <div>{song}</div>
        <div>{artist}</div>
      </div>

      {/* Show 'album', if size >=large */}

      {/* Hide 'length', if size <large */}
      <div className="col col-1">{length}</div>
      <icon className="col col-auto">:</icon>
    </li>
  );
};

export default SongListItem;
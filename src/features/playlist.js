import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Grid from '@/components/grid/grid';

import { firestore } from '@/base';

const Playlist = (props) => {
  const { playlistName } = props;

  // fetching 'latest playlist' view (not really but y'know)
  const columns = {
    song: { label: "Song" },
    artist: { label: "Artist" },
    length: { label: "Length" },
  };

  const [playlistSongs, ] = useCollectionData(
    firestore
      .collection("playlists")
      .doc(playlistName)
      .collection("music"),
    { idField: "id" }
  );

  return (
    <div>
      <div className="playlist__header">the greatest playlist :dab:</div>
      <Grid
        columns={columns}
        data={playlistSongs || []}
      ></Grid>
    </div>
  );
}

export default Playlist;
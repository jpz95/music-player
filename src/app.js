import React, { /* useState, useEffect */ } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SearchBar from '@/components/search-bar/search-bar';
import Grid from '@/components/grid/grid';

import { firestore } from './base';

/* const PlaylistDispatch = React.createContext(null);
const reducer = (state, action) => {
    switch (action.type) {
        case 'getDataFromStore':
            return useCollectionData('music', { idField: 'id' });

        default:
            break;
    }
}; */

const App = () => {
    // fetching 'latest playlist' view (not really but y'know)
    const columns = {
        song: { label: "Song" },
        artist: { label: "Artist" },
        length: { label: "Length" },
    };

    const [playlistSongs, ] = useCollectionData(
        firestore
            .collection("playlists")
            .doc("greatest_playlist")
            .collection("music"),
        { idField: "id" }
    );

    return (
        <div className="app">

        <header className="app__header">
                <SearchBar></SearchBar>
            </header>

            <div className="app__content">
                <div className="playlist__header">the greatest playlist :dab:</div>
                <Grid
                    columns={columns}
                    data={playlistSongs || []}
                ></Grid>
            </div>
        </div>
    );
}

export default App;

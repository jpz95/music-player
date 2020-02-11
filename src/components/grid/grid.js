import React, { useState, /* useLayoutEffect, useEffect */ } from 'react';
import GridRow from './grid-row';
import GridUtils from './grid-utils';
// import { render } from 'node-sass';

const Grid = (props) => {
    // TODO
    // need to get column objects (field, label) that are visible
    //   (how to update if visibility changes??)
    // need to get set of columns that are visible
    //  (can we convert to object defintion for columns then?) ex. {'song': { label: 'Song' }}
    // const [visibleColumns, ] = useState(GridUtils.makeVisibleColumns(props.columns));

    const [columns, ] = useState(props.columns);

    const [data, ] = useState(props.data);

    // useEffect(() => {
    //     (async () => {
    //         const playlistData = await fetch();
    //         setData(playlistData)
    //     })()
    // });

    const render = () => {
        console.log("rendering", columns);
        return (
            GridUtils.getVisibleColumns(columns).map(([field, values]) => (

                <div className="grid__cell" key={`header-${field}`}>
                    {values.label}
                </div>
            ))
        )
    };

    return (
        <div className="grid d-grid gap-sm">

            <div className="grid__row -header">
                { render() }
            </div>

            <div className="d-grid gap-md">
                {data.map(item => (
                    // TODO handle for mobile view
                    <GridRow key={`${item.id}`}
                        data={item}
                    ></GridRow>
                ))}
            </div>

        </div>
    );
};

export default Grid;
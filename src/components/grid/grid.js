import React, { useState } from 'react';
import GridRow from './grid-row';
import GridUtils from './grid-utils';

const Grid = (props) => {
    // TODO
    // need to get column objects (field, label) that are visible
    //   (how to update if visibility changes??)
    // need to get set of columns that are visible
    //  (can we convert to object defintion for columns then?) ex. {'song': { label: 'Song' }}
    const [visibleColumns, ] = useState(GridUtils.getVisibleColumns(props.columns));

    const [columns, ] = useState(props.columns);

    const [data, ] = useState(props.data);

    // useEffect(() => {
    //     (async () => {
    //         const playlistData = await fetch();
    //         setData(playlistData)
    //     })()


    //     // nvm just use re-base instead
    // });

    const renderHeaderCells = () => {
        const visibleColumnsArr = Array.from(visibleColumns);
        return (
            visibleColumnsArr.map((field) => {
                const values = columns[field];
                return (
                    <div className="grid__cell" key={`header-${field}`}>
                        {values.label}
                    </div>
                )}
            )
        );
    };

    return (
        <div className="grid d-grid gap-sm">

            <div className="grid__row -header">
                { renderHeaderCells() }
            </div>

            <div className="d-grid gap-md">
                {data.map(item => (
                    // TODO handle for mobile view
                    <GridRow key={`${item.id}`}
                        data={item}
                        visibleColumns={visibleColumns}
                    ></GridRow>
                ))}
            </div>

        </div>
    );
};

export default Grid;
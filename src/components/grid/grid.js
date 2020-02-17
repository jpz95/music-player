import React, { useState } from 'react';
import GridRow from './grid-row';
import GridUtils from './grid-utils';

const Grid = (props) => {
    const { data, columns } = props;

    const [visibleColumns, ] = useState(GridUtils.getVisibleColumns(columns));

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
import React from 'react';
import GridRow from './grid-row';

const Grid = ({ columns = [], data = [] }) => {
    return (
        <div className="grid d-grid gap-sm">

            <div className="grid__row -header">
                {columns.map(({ label, field }) => (

                    <div className="grid__cell"
                        key={`header-${field}`}
                    >
                        {label}
                    </div>
                ))}
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
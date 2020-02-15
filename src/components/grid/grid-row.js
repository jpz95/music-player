import React, { useState, useEffect } from 'react';
import GridCell from "./grid-cell";

const baseClass = "grid__row";

const GridRow = (props) => {
    const { className, visibleColumns } = props;

    const [cells] = useState(props.data);
    useEffect(() => {
        console.log("rendering columns", cells);
    });

    const renderCells = () => {
        // TODO handle for mobile view
        return Object.entries(cells).map(([field, value]) => {
            // TODO check if field is displayed
            return visibleColumns.has(field) ? (
                <GridCell key={`cell-${field}`}>{value}</GridCell>
            ) : null;
        });
    };

    const classes = className ? `${baseClass} ${className}` : baseClass;
    return (
        <div className={classes}>
            { renderCells() }
        </div>
    );
};

export default GridRow;
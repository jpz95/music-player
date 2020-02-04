import React, { useState, useEffect } from 'react';
import GridCell from "./grid-cell";

const baseClass = "grid__row";

function GridRow({ data = {}, className = "" } = {}) {
    const [cells] = useState(data);
    useEffect(() => {
        console.log("rendering columns", cells);
    });

    const renderCells = () => {
        // TODO handle for mobile view
        return Object.keys(cells).map(key => {
            // TODO check if field is displayed
            const field = cells[key];
            return (
                <GridCell key={`cell-${key}`}>{field}</GridCell>
            );
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
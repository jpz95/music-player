import React, { useState, useEffect } from 'react';
import GridCell from "./grid-cell";

const baseClass = "grid__row";

const GridRow = ({ data = {}, className = "" }) => {
    const [cells] = useState(data);
    useEffect(() => {
        console.log("rendering columns", cells);
    });

    const renderCells = () => {
        // TODO handle for mobile view
        return Object.entries(cells).map(([field, value]) => {
            // TODO check if field is displayed
            return (
                <GridCell key={`cell-${field}`}>{value}</GridCell>
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
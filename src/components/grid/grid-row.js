import React from 'react';
import GridCell from "./grid-cell";

const baseClass = "grid__row";

function GridRow({ children = [], className = "" }) {
    const renderCells = () => {
        return children.map(cellData => {
            return (
                <GridCell>{cellData}</GridCell>
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
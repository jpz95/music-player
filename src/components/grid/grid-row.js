import React from 'react';
import GridCell from "./grid-cell";

const baseClass = "grid__row";

function GridRow(props) {
    const renderCells = () => {
        return React.Children.map(props.children, cellData => {
            return (
                <GridCell>{cellData}</GridCell>
            );
        });
    };

    const classes = `${baseClass} ${props.className}`;
    return (
        <div className={classes}>
            { renderCells() }
        </div>
    );
};

export default GridRow;
import React, { useState } from 'react';
import GridCell from "./grid-cell";

const baseClass = "grid__row";

const GridRow = (props) => {
  const { className, visibleColumns } = props;

  const [cells] = useState(props.data);

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
    <row className={classes}>
      { renderCells() }
    </row>
  );
};

export default GridRow;
import React from 'react';

function GridCell(props) {
  return (
    <cell className="grid__cell">
      {props.children}
    </cell>
  );
};

export default GridCell;
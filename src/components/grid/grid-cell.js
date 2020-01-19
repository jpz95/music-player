import React /* { useState } */ from 'react';

function GridCell(props) {
    return (
        <span className="grid__cell">
            {props.children}
        </span>
    );
};

export default GridCell;
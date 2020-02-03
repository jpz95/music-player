import React from 'react';

const Grid = ({ columns = [] }) => {
    return (
        <div className="grid">

            <div className="grid__row -header">
                {columns.map(column => (
                    <div key={`header-${column}`}
                        className="grid__cell"
                    >
                        {column}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Grid;
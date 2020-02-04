import React from 'react';

const Grid = ({ columns = [] }) => {
    return (
        <div className="grid">

            <div className="grid__row -header">
                {columns.map(({ label, field }) => (

                    <div className="grid__cell"
                        key={`header-${field}`}
                    >
                        {label}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Grid;
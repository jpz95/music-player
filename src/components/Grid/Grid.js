import React, { useState } from 'react';
import GridRow from './grid-row';

function Grid(props) {
    const [columnNames] = useState(props.children);

    const render = () => {
        return renderHeaderRow(); //.concat(this.renderRows());
    };

    const renderHeaderRow = () => {
        return (
            <GridRow className={`grid__header`}> {columnNames} </GridRow>
        );
    };

    /* const renderRows = () => {
        let children = React.Children.map(this.props.children, child => {
            console.log("making child", child)
            return (
                <GridRow>{child}</GridRow>
            );
        });
        console.log(children);
        return children;
    }; */

    return (
        <div className="grid">
            { render() }
        </div>
    );
};

export default Grid;
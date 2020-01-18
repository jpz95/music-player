import React, { Component } from 'react';

const baseClass = "grid__row";

class GridRow extends Component {
    render() {
        const { className } = this.props;
        const classes = `${baseClass} ${className}`;

        return (
            <div className={classes}></div>
        );
    }
}

export default GridRow;
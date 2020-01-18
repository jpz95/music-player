import React, { Component } from 'react';
import GridRow from './grid-row';

class Grid extends Component {
    constructor() {
        super()
        this.renderChildren = this.renderChildren.bind(this)
        this.renderHeaderRow = this.renderHeaderRow.bind(this)
        this.renderRows = this.renderRows.bind(this)
    }

    renderChildren() {
        return this.renderHeaderRow(); //.concat(this.renderRows());
    }

    renderHeaderRow() {
        return (
            // TODO gridrow needs extra class name
            <GridRow className="grid__header">{this.props.children}</GridRow>
        );
    }

    renderRows() {
        let children = React.Children.map(this.props.children, child => {
            console.log("making child", child)
            return (
                <GridRow>{child}</GridRow>
            );
        });
        console.log(children);
        return children;
    }

    render() {
        return (
            <div className="grid">
                { this.renderChildren() }
            </div>
        );
    }
}

export default Grid;
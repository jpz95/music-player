import React, { Component } from 'react';
import GridRow from './GridRow';

class Grid extends Component {
    constructor() {
        super()
        this.renderChildren = this.renderChildren.bind(this)
    }

    renderChildren() {
        return React.Children.map(this.props.children, child => {
            return (
                <GridRow></GridRow>
            )
        }) 
    }

    render() {
        return (
            <div className="Grid">
                { this.renderChildren() }
            </div>
        );
    }
}

export default Grid;
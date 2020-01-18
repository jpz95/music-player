import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="grid grid-column g-sm">
                <span>S</span>
                <input className="flex-grow"></input>
                <span>GO</span>
            </div>
        );
    }
}

export default SearchBar;
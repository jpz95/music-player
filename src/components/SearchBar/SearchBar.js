import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div class="grid grid-column g-sm">
                <span>S</span>
                <input class="flex-grow"></input>
                <span>GO</span>
            </div>
        );
    }
}

export default SearchBar;
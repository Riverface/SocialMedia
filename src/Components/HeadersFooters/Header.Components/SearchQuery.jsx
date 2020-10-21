import React from 'react'

function SearchQuery() {
    return <div className='searchQuery'>
        <input id='search-input' placeholder="Where is that thing..." />

        <button id='search-button'>Find thing</button>
    </div>;
}

export default SearchQuery
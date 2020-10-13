import React from 'react';
import MainNavigation from './Header.Components/MainNavigation';
import SearchQuery from './Header.Components/SearchQuery';

function Header() {
    return <div className='header'>
        <MainNavigation />
        <SearchQuery />
    </div>

}

export default Header
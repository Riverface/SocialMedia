import React from 'react';
import ContentCompose from './ContentFeed.Components/ContentCompose';
import ContentList from './ContentFeed.Components/ContentList';

function ContentFeed(props) {
    return <div className=' item contentFeed'>
        <ContentCompose />
        <ContentList />
    </div>;
}

export default ContentFeed
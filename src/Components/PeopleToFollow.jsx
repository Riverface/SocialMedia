import React, { } from 'react';
import { PersonToFollow } from './ContentFeed.Components/PeopleToFollow.Components/PersonToFollow';

export function PeopleToFollow() {
    return <React.Fragment>
    <div className='item peopleToFollow'>
    <div className='pTFLabel'>
        Who to follow
    </div>
    
            <PersonToFollow />
            <PersonToFollow />
            <PersonToFollow />
            <PersonToFollow />
            <PersonToFollow />
            <PersonToFollow />
            <PersonToFollow />
        </div>
    </React.Fragment>
}
export default PeopleToFollow
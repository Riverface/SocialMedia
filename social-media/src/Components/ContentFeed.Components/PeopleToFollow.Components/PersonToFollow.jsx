import React, { } from 'react';
import Butcher from '../../../Images/Butcher.png';
export function PersonToFollow() {

    return <React.Fragment>
        <div className='personToFollow'>
            <img alt='SPANIKOPITA' src={Butcher} />
            <div className='personName'>
                Greek Guy
            </div>
            <button className='butt2'>
                Follow
            </button>
        </div>

    </React.Fragment>
}
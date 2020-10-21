import React, { } from 'react';
import Butcher from '../../Images/Butcher.png';

function PersonToFollow() {
    return <>
        <div className='personToFollow'>
            <img alt='SPANIKOPITA' class='personPhoto' src={Butcher} />
            <div className='personName'>
                Butcher
            </div>
            <button className='butt2'>
                Follow
            </button>
        </div>
    </>
}

export default PersonToFollow
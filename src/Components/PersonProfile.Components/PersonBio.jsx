import React from 'react';
import Letter from '../../Images/Letter.png'
export function PersonBio() {
    return (
        <div className='personBio'>
            <div className='personBioLabel'>
                Bio
            </div>

            <div class='bioPhotoContainer'>
                <img class='bioPhoto' src={Letter} />
            </div>

        </div>
    );
}

export default PersonBio;
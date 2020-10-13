import React from 'react';
import PersonWidget from './PersonProfile.Components/PersonWidget';
import PersonBio from './PersonProfile.Components/PersonBio'

function PersonProfile() {
    return <div className='item personProfile'>
        <PersonWidget />
        <PersonBio />
    </div>
}

export default PersonProfile;
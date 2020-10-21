import React from 'react'
import PersonBio from './PersonBio';
import PersonBackground from './PersonWidget.Components/PersonBackground'
import PersonDetails from './PersonWidget.Components/PersonDetails';

function PersonWidget() {
    return <div className=' personWidget'>
        <PersonBackground />
        <PersonDetails />
    </div>;
}

export default PersonWidget